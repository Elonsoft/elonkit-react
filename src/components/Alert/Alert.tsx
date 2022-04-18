import { AlertProps } from './Alert.types';

import clsx from 'clsx';
import { alertClasses, getAlertUtilityClass } from './Alert.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

import { IconAlert, IconCheckCircle, IconError, IconInformationLarge } from '../../icons';

type AlertOwnerState = {
  classes?: AlertProps['classes'];
  color?: AlertProps['color'];
  severity: 'success' | 'warning' | 'error' | 'info';
  variant: 'standard';
  isWithActions?: boolean;
};

const useUtilityClasses = (ownerState: AlertOwnerState) => {
  const { classes, color, variant, severity } = ownerState;

  const slots = {
    root: ['root', `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ['icon'],
    content: ['content'],
    action: ['action']
  };

  return composeClasses(slots, getAlertUtilityClass, classes);
};

const AlertRoot = styled('div', {
  name: 'ESAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, variant, severity }
    } = props;

    return [styles.root, styles[variant], styles[`${variant}${capitalize(color || severity)}`]];
  }
})<{ ownerState: AlertOwnerState }>(({ ownerState: { isWithActions }, theme }) => ({
  display: 'flex',
  borderRadius: '6px',
  padding: `${isWithActions ? '11px' : '7px'} 15px`,

  [`&.${alertClasses.standardSuccess}`]: {
    backgroundColor: theme.palette.success.A100,
    border: `1px solid ${theme.palette.success.A200}`,
    color: theme.palette.success[300]
  },
  [`&.${alertClasses.standardWarning}`]: {
    backgroundColor: theme.palette.warning.A100,
    border: `1px solid ${theme.palette.warning.A200}`,
    color: theme.palette.warning[300]
  },
  [`&.${alertClasses.standardError}`]: {
    backgroundColor: theme.palette.error.A100,
    border: `1px solid ${theme.palette.error.A200}`,
    color: theme.palette.error[300]
  },
  [`&.${alertClasses.standardInfo}`]: {
    backgroundColor: theme.palette.info.A100,
    border: `1px solid ${theme.palette.info.A200}`,
    color: theme.palette.info[300]
  },
  [`&.${alertClasses.standardMonoA}`]: {
    backgroundColor: theme.palette.monoA.A50,
    border: `1px solid ${theme.palette.monoA.A100}`,
    color: theme.palette.monoA.A500
  }
}));

const AlertIcon = styled('div', {
  name: 'ESAlert',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(() => ({
  paddingTop: '8px',
  marginRight: '8px'
}));

const AlertContent = styled(Typography, {
  name: 'ESAlert',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(() => ({
  wordBreak: 'break-word',
  marginRight: 'auto',
  minHeight: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})) as typeof Typography;

const AlertAction = styled('div', {
  name: 'ESAlert',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})<{ ownerState: AlertOwnerState }>(({ ownerState: { isWithActions } }) => ({
  margin: `${isWithActions ? '4px' : '8px'} 0 0 8px`
}));

const defaultIconMapping = {
  success: <IconCheckCircle />,
  warning: <IconAlert />,
  error: <IconError />,
  info: <IconInformationLarge />
};

export const Alert: React.FC<AlertProps> = (inProps) => {
  const {
    className,
    children,
    sx,
    icon,
    variant = 'standard',
    severity = 'success',
    action,
    color,
    iconMapping = defaultIconMapping,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAlert'
  });

  const isWithActions = Array.isArray(children)
    ? children.some((elem) =>
        typeof elem === 'object' ? (elem.type?.displayName === 'AlertActions' ? true : false) : false
      )
    : false;

  const ownerState = { ...props, variant, severity, color, isWithActions };
  const classes = useUtilityClasses(ownerState);

  return (
    <AlertRoot className={clsx(classes.root, className)} sx={sx} ownerState={ownerState}>
      {icon !== false && <AlertIcon className={classes.icon}>{icon || iconMapping[severity]}</AlertIcon>}
      <AlertContent className={classes.content} component="div" variant="body100" color="monoA.A900">
        {children}
      </AlertContent>
      {!!action && (
        <AlertAction ownerState={ownerState} className={classes.action}>
          {action}
        </AlertAction>
      )}
    </AlertRoot>
  );
};
