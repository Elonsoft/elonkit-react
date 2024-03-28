import { DialogContentProps } from './DialogContent.types';

import clsx from 'clsx';
import { getDialogContentUtilityClass } from './DialogContent.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type DialogContentOwnerState = {
  classes?: DialogContentProps['classes'];
};

const useUtilityClasses = (ownerState: DialogContentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDialogContentUtilityClass, classes);
};

const DialogContentRoot = styled('div', {
  name: 'ESDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  flex: '1 1 auto',
  overflowY: 'auto',
  color: theme.vars.palette.monoA.A700,
  padding: '0 24px'
}));

export const DialogContent = (inProps: DialogContentProps) => {
  const { className, sx, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogContent'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogContentRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </DialogContentRoot>
  );
};
