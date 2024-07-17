import { AuthFooterProps } from './AuthFooter.types';

import clsx from 'clsx';
import { getAuthFooterUtilityClass } from './AuthFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type AuthFooterOwnerState = {
  classes?: AuthFooterProps['classes'];
};

const useUtilityClasses = (ownerState: AuthFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthFooterUtilityClass, classes);
};

const AuthFooterRoot = styled(Typography, {
  name: 'ESAuthFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  gridRow: 3,
  alignSelf: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  color: theme.vars.palette.monoA.A400,
})) as typeof Typography;

export const AuthFooter = (inProps: AuthFooterProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthFooter',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthFooterRoot className={clsx(classes.root, className)} component="footer" sx={sx} variant="caption">
      {children}
    </AuthFooterRoot>
  );
};
