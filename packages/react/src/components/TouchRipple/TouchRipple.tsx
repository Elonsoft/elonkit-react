import { forwardRef } from 'react';

import { TouchRippleProps } from './TouchRipple.types';

import clsx from 'clsx';
import { getTouchRippleUtilityClass } from './TouchRipple.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type TouchRippleOwnerState = {
  classes?: TouchRippleProps['classes'];
};

const useUtilityClasses = (ownerState: TouchRippleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTouchRippleUtilityClass, classes);
};

const TouchRippleRoot = styled('div', {
  name: 'ESTouchRipple',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(({ theme }) => ({
  borderRadius: 'inherit',
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,

  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.short
  }),

  '&::after': {
    content: '""',
    opacity: 0,
    position: 'absolute',
    background: 'radial-gradient(closest-side, var(--pressed) 99%, transparent 100%)',
    transformOrigin: 'center center',
    transition: 'opacity 375ms linear'
  }
}));

/**
 * The TouchRipple.
 */
export const TouchRipple = forwardRef<HTMLDivElement, TouchRippleProps>(function TouchRipple(inProps, ref) {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTouchRipple'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <TouchRippleRoot ref={ref} className={clsx(className, classes.root)} sx={sx} />;
});
