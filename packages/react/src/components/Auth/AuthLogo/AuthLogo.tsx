import { AuthLogoProps } from './AuthLogo.types';

import clsx from 'clsx';
import { getAuthLogoUtilityClass } from './AuthLogo.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthLogoOwnerState = {
  classes?: AuthLogoProps['classes'];
};

const useUtilityClasses = (ownerState: AuthLogoOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthLogoUtilityClass, classes);
};

const AuthLogoRoot = styled('div', {
  name: 'ESAuthLogo',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  marginBottom: '32px',
}));

export const AuthLogo = (inProps: AuthLogoProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthLogo',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthLogoRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthLogoRoot>
  );
};
