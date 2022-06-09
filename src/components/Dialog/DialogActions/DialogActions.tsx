import { FC, useRef, useState } from 'react';

import { DialogActionsProps } from './DialogActions.types';

import clsx from 'clsx';
import { getDialogActionsUtilityClass } from './DialogActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useIntersectionObserver } from '../../../hooks';

type DialogActionsOwnerState = {
  classes?: DialogActionsProps['classes'];
  sticky?: boolean;
  isStuck?: boolean;
};

const useUtilityClasses = (ownerState: DialogActionsOwnerState) => {
  const { classes, sticky, isStuck } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', sticky && isStuck && 'stuck']
  };

  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};

const DialogActionsRoot = styled('div', {
  name: 'ESDialogActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, isStuck }
    } = props;
    return [styles.root, sticky && styles.sticky, sticky && isStuck && styles.stuck];
  }
})<{ ownerState: DialogActionsOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 16,

  [theme.breakpoints.up('tabletXS')]: {
    padding: 24
  },

  '> :not(:first-of-type)': {
    marginLeft: 16
  },

  ...(ownerState.sticky && {
    position: 'sticky',
    bottom: -1,
    backgroundColor: theme.palette.surface[600],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,

    ...(ownerState.isStuck && {
      borderTop: `1px solid ${theme.palette.monoA.A100}`,
      borderRadius: 0
    })
  })
}));

export const DialogActions: FC<DialogActionsProps> = (inProps) => {
  const { className, sx, sticky, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogActions'
  });

  const [isStuck, setStuck] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(
    root,
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1] }
  );

  const ownerState = { sticky, isStuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogActionsRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} ref={root}>
      {children}
    </DialogActionsRoot>
  );
};
