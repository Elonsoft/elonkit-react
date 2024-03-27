import { DialogTitleProps } from './DialogTitle.types';

import clsx from 'clsx';
import { getDialogTitleUtilityClass } from './DialogTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useStuckSentinel } from '../../../hooks';

type DialogTitleOwnerState = {
  classes?: DialogTitleProps['classes'];
  sticky?: boolean;
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: DialogTitleOwnerState) => {
  const { classes, sticky, stuck } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', sticky && stuck && 'stuck']
  };

  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = styled('div', {
  name: 'ESDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, stuck }
    } = props;
    return [styles.root, sticky && styles.sticky, sticky && stuck && styles.stuck];
  }
})<{ ownerState: DialogTitleOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.h4,
  color: theme.vars.palette.monoA.A900,
  padding: 24,
  paddingBottom: 6,

  ...(ownerState.sticky && {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.vars.palette.surface[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 1,

    ...(ownerState.stuck && {
      borderRadius: 0,

      '&::after': {
        backgroundColor: theme.vars.palette.surface[600],
        borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
        content: '""',
        display: 'block',
        height: 18,
        left: 0,
        position: 'absolute',
        right: 0,
        top: '100%'
      }
    })
  })
}));

export const DialogTitle = (inProps: DialogTitleProps) => {
  const { className, sx, sticky, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogTitle'
  });

  const { stuck, sentinel } = useStuckSentinel();

  const ownerState = { sticky, stuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      {sentinel}
      <DialogTitleRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        {children}
      </DialogTitleRoot>
    </>
  );
};
