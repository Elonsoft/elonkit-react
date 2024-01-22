import { ErrorPageActionsProps } from './ErrorPageActions.types';

import clsx from 'clsx';
import { getErrorPageActionsUtilityClass } from './ErrorPageActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type ErrorPageActionsOwnerState = {
  classes?: ErrorPageActionsProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getErrorPageActionsUtilityClass, classes);
};
export const ErrorPageActionsRoot = styled('div', {
  name: 'ESErrorPageActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  gap: '16px',
  gridArea: 'actions',
  marginTop: '24px'
}));

export const ErrorPageActions = (inProps: ErrorPageActionsProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESErrorPageActions'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageActionsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </ErrorPageActionsRoot>
  );
};
