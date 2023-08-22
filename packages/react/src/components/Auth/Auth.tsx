import { AuthProps } from './Auth.types';

import clsx from 'clsx';
import { getAuthUtilityClass } from './Auth.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthOwnerState = {
  classes?: AuthProps['classes'];
};

const useUtilityClasses = (ownerState: AuthOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthUtilityClass, classes);
};

const AuthRoot = styled('div', {
  name: 'ESAuth',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(
  ({ theme }) => ({
    display: 'grid',
    gridTemplateRows: '1fr auto 1fr',
    minHeight: '100vh',
    padding: '32px 16px',
    gap: '32px',
    backgroundColor: theme.vars.palette.surface.background,
  }),
  {
    minHeight: '100dvh',
  }
);

/**
 * The collection of components for building basic auth pages.
 */
export const Auth = (inProps: AuthProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuth',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthRoot>
  );
};
