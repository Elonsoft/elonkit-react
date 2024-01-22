import { ErrorPageStatusProps } from './ErrorPageStatus.types';

import clsx from 'clsx';
import { getErrorPageStatusUtilityClass } from './ErrorPageStatus.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type ErrorPageStatusOwnerState = {
  classes?: ErrorPageStatusProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageStatusOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getErrorPageStatusUtilityClass, classes);
};
export const ErrorPageStatusRoot = styled('div', {
  name: 'ESErrorPageStatus',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.palette.monoA.A900,
  gridArea: 'status',
  height: '64px',

  [theme.breakpoints.up('tabletXS')]: {
    height: '78px'
  }
}));

export const ErrorPageStatus = (inProps: ErrorPageStatusProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESErrorPageStatus'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageStatusRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </ErrorPageStatusRoot>
  );
};
