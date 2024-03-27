import { DialogActionsProps } from './DialogActions.types';

import clsx from 'clsx';
import { getDialogActionsUtilityClass } from './DialogActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useStuckSentinel } from '../../../hooks';

type DialogActionsOwnerState = {
  classes?: DialogActionsProps['classes'];
  sticky?: boolean;
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: DialogActionsOwnerState) => {
  const { classes, sticky, stuck } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', sticky && stuck && 'stuck']
  };

  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};

const DialogActionsRoot = styled('div', {
  name: 'ESDialogActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, stuck }
    } = props;
    return [styles.root, sticky && styles.sticky, sticky && stuck && styles.stuck];
  }
})<{ ownerState: DialogActionsOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px 24px 24px',

  '> :not(:first-of-type)': {
    marginLeft: 16
  },

  ...(ownerState.sticky && {
    position: 'sticky',
    bottom: -8,
    backgroundColor: theme.vars.palette.surface[600],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,

    ...(ownerState.stuck && {
      borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
      borderRadius: 0
    })
  })
}));

export const DialogActions = (inProps: DialogActionsProps) => {
  const { className, sx, sticky, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogActions'
  });

  const { stuck, sentinel } = useStuckSentinel();

  const ownerState = { sticky, stuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <DialogActionsRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        {children}
      </DialogActionsRoot>
      {sentinel}
    </>
  );
};
