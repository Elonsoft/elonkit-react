import { AuthMainProps } from './AuthMain.types';

import clsx from 'clsx';
import { getAuthMainUtilityClass } from './AuthMain.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AuthMainOwnerState = {
  classes?: AuthMainProps['classes'];
};

const useUtilityClasses = (ownerState: AuthMainOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthMainUtilityClass, classes);
};

const AuthMainRoot = styled('div', {
  name: 'ESAuthMain',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  gridRow: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',
  maxWidth: '400px',
}));

export const AuthMain = (inProps: AuthMainProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAuthMain',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthMainRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AuthMainRoot>
  );
};
