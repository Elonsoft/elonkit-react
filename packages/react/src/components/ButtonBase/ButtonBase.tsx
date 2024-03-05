import { forwardRef } from 'react';

import { ButtonBaseProps, ButtonBaseTypeMap } from './ButtonBase.types';

import clsx from 'clsx';
import { buttonBaseClasses, getButtonBaseUtilityClass } from './ButtonBase.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { TouchRipple, touchRippleClasses, useTouchRipple } from '../TouchRipple';

type ButtonBaseOwnerState = {
  classes: ButtonBaseProps['classes'];
  disabled: ButtonBaseProps['disabled'];
  disableTouchRipple: ButtonBaseProps['disableTouchRipple'];
  pressed: boolean;
};

const useUtilityClasses = (ownerState: ButtonBaseOwnerState) => {
  const { classes, disabled, disableTouchRipple, pressed } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', disableTouchRipple && 'disableTouchRipple', pressed && 'pressed'],
    wrapper: ['wrapper']
  };

  return composeClasses(slots, getButtonBaseUtilityClass, classes);
};

const ButtonBaseRoot = styled('button', {
  name: 'ESButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, disableTouchRipple, pressed }
    } = props;

    return [
      styles.root,
      disabled && styles.disabled,
      disableTouchRipple && styles.disableTouchRipple,
      pressed && styles.disabled
    ];
  }
})(({ theme }) => ({
  '--background': 'transparent',
  '--text': theme.palette.monoB[500],
  '--hovered': theme.palette.monoB.A50,
  '--focused': theme.palette.monoB.A200,
  '--pressed': theme.palette.monoB.A150,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  overflow: 'hidden',

  '&::-moz-focus-inner': {
    // Remove Firefox dotted outline.
    borderStyle: 'none'
  },

  backgroundColor: 'var(--background)',
  color: 'var(--text)',

  '@media (hover: hover)': {
    [`&:not(:disabled):hover .${touchRippleClasses.root}`]: {
      backgroundColor: 'var(--hovered)'
    }
  },

  [`&:not(:disabled):focus-visible .${touchRippleClasses.root}`]: {
    backgroundColor: 'var(--focused)'
  },

  [`&.${buttonBaseClasses.pressed} .${touchRippleClasses.root}::after`]: {
    opacity: 1,
    transitionDuration: '105ms'
  },

  [`&.${buttonBaseClasses.disableTouchRipple}`]: {
    [`& .${touchRippleClasses.root}::after`]: {
      inset: 0,
      background: 'var(--pressed)',
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      })
    },

    [`&:active .${touchRippleClasses.root}::after`]: {
      opacity: 1
    }
  },

  '@media print': {
    colorAdjust: 'exact'
  }
}));

const ButtonBaseWrapper = styled('div', {
  name: 'ESButtonBase',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper
})(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  zIndex: 1
}));

/**
 * The ButtonBase.
 */
export const ButtonBase = forwardRef(function ButtonBase(inProps: ButtonBaseProps, ref) {
  const {
    component,
    children,
    classes: inClasses,
    className,
    sx,
    disabled,
    disableTouchRipple,
    type = 'button',
    onClick,
    onContextMenu,
    onPointerCancel,
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    TouchRippleProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESButtonBase'
  });

  const {
    ref: touchRippleRef,
    pressed,
    bind
  } = useTouchRipple({
    ...TouchRippleProps,
    disabled: disabled || disableTouchRipple,
    onClick,
    onContextMenu,
    onPointerCancel,
    onPointerDown,
    onPointerUp,
    onPointerLeave
  });

  const ownerState = { classes: inClasses, disabled, disableTouchRipple, pressed };
  const classes = useUtilityClasses(ownerState);

  return (
    <ButtonBaseRoot
      ref={ref}
      as={component}
      className={clsx(className, classes.root)}
      disabled={disabled}
      sx={sx}
      type={type}
      {...props}
      {...bind}
    >
      <ButtonBaseWrapper className={classes.wrapper}>{children}</ButtonBaseWrapper>
      <TouchRipple ref={touchRippleRef} />
    </ButtonBaseRoot>
  );
}) as OverridableComponent<ButtonBaseTypeMap>;
