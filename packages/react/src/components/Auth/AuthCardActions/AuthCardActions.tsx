import { AuthCardActionsProps } from './AuthCardActions.types';

import clsx from 'clsx';
import { getAuthCardActionsUtilityClass } from './AuthCardActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthCardActionsOwnerState = {
  classes?: AuthCardActionsProps['classes'];
};

const useUtilityClasses = (ownerState: AuthCardActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthCardActionsUtilityClass, classes);
};

const AuthCardActionsRoot = styled('div', {
  name: 'ESAuthCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  paddingTop: '32px',
}));

export const AuthCardActions = (inProps: AuthCardActionsProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthCardActions',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthCardActionsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthCardActionsRoot>
  );
};
