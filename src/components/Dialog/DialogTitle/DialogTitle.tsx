import { FC, useRef, useState } from 'react';

import { DialogTitleProps } from './DialogTitle.types';

import clsx from 'clsx';
import { getDialogTitleUtilityClass } from './DialogTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useIntersectionObserver } from '../../../hooks';

type DialogTitleOwnerState = {
  classes?: DialogTitleProps['classes'];
  sticky?: boolean;
  isStuck?: boolean;
};

const useUtilityClasses = (ownerState: DialogTitleOwnerState) => {
  const { classes, sticky, isStuck } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', sticky && isStuck && 'stuck']
  };

  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = styled('div', {
  name: 'ESDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, isStuck }
    } = props;
    return [styles.root, sticky && styles.sticky, sticky && isStuck && styles.stuck];
  }
})<{ ownerState: DialogTitleOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.h4,
  color: theme.palette.monoA.A900,
  padding: 16,
  paddingBottom: 8,

  [theme.breakpoints.up('tabletXS')]: {
    padding: 24,
    paddingBottom: 6
  },

  ...(ownerState.sticky && {
    position: 'sticky',
    top: -1,
    backgroundColor: theme.palette.surface[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 1,

    ...(ownerState.isStuck && {
      borderRadius: 0,

      '&::after': {
        backgroundColor: theme.palette.surface[600],
        borderBottom: `1px solid ${theme.palette.monoA.A100}`,
        content: '""',
        display: 'block',
        height: 8,
        left: 0,
        position: 'absolute',
        right: 0,
        top: '100%',

        [theme.breakpoints.up('tabletXS')]: {
          height: 18
        }
      }
    })
  })
}));

export const DialogTitle: FC<DialogTitleProps> = (inProps) => {
  const { className, sx, sticky, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogTitle'
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
    <DialogTitleRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} ref={root}>
      {children}
    </DialogTitleRoot>
  );
};
