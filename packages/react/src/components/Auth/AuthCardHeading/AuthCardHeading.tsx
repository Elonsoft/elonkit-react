import { AuthCardHeadingProps } from './AuthCardHeading.types';

import clsx from 'clsx';
import { getAuthCardHeadingUtilityClass } from './AuthCardHeading.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type AuthCardHeadingOwnerState = {
  classes?: AuthCardHeadingProps['classes'];
};

const useUtilityClasses = (ownerState: AuthCardHeadingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthCardHeadingUtilityClass, classes);
};

const AuthCardHeadingRoot = styled(Typography, {
  name: 'ESAuthCardHeading',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
  textAlign: 'center',
})) as typeof Typography;

export const AuthCardHeading = (inProps: AuthCardHeadingProps) => {
  const {
    children,
    className,
    classes: inClasses,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAuthCardHeading',
  });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthCardHeadingRoot className={clsx(classes.root, className)} component="h2" sx={sx} variant="h4" {...props}>
      {children}
    </AuthCardHeadingRoot>
  );
};
