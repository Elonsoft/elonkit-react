import { AuthCardProps } from './AuthCard.types';

import clsx from 'clsx';
import { getAuthCardUtilityClass } from './AuthCard.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthCardOwnerState = {
  classes?: AuthCardProps['classes'];
};

const useUtilityClasses = (ownerState: AuthCardOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthCardUtilityClass, classes);
};

const AuthCardRoot = styled('div', {
  name: 'ESAuthCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  width: '100%',
  borderRadius: '4px',
  padding: '32px',
  backgroundColor: theme.vars.palette.surface[200],
  boxShadow: theme.vars.palette.shadow.down[200],
}));

export const AuthCard = (inProps: AuthCardProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthCard',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthCardRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthCardRoot>
  );
};
