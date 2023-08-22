import { AuthCardContentProps } from './AuthCardContent.types';

import clsx from 'clsx';
import { getAuthCardContentUtilityClass } from './AuthCardContent.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthCardContentOwnerState = {
  classes?: AuthCardContentProps['classes'];
};

const useUtilityClasses = (ownerState: AuthCardContentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthCardContentUtilityClass, classes);
};

const AuthCardContentRoot = styled('div', {
  name: 'ESAuthCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

export const AuthCardContent = (inProps: AuthCardContentProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthCardContent',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthCardContentRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthCardContentRoot>
  );
};
