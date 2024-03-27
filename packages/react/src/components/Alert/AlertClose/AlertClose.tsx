import { AlertCloseProps } from './AlertClose.types';

import clsx from 'clsx';
import { getAlertCloseUtilityClass } from './AlertClose.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { touchRippleClasses } from '@mui/material';
import Button, { buttonClasses } from '@mui/material/Button';

import { IconCloseW500 } from '../../../icons';
import { svgIconClasses } from '../../SvgIcon';

type AlertCloseOwnerState = {
  classes?: AlertCloseProps['classes'];
};

const useUtilityClasses = (ownerState: AlertCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAlertCloseUtilityClass, classes);
};

const AlertCloseRoot = styled(Button, {
  name: 'ESAlertClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    padding: '0 4px'
  },
  [`&.${buttonClasses.focusVisible} .${touchRippleClasses.child}`]: {
    borderRadius: '4px'
  },
  [`& .${svgIconClasses.root}`]: {
    color: theme.vars.palette.monoA.A500
  }
}));

export const AlertClose = (inProps: AlertCloseProps) => {
  const {
    className,
    sx,
    label,
    icon = IconCloseW500,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAlertClose'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const Icon = icon as any;

  return (
    <AlertCloseRoot
      aria-label={label}
      className={clsx(classes.root, className)}
      color="tertiary"
      size="24"
      sx={sx}
      onClick={onClick}
    >
      <Icon />
    </AlertCloseRoot>
  );
};
