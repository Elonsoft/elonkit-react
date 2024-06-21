import React, { forwardRef } from 'react';

import { SliderOwnerState, SliderProps } from './Slider.types';

import clsx from 'clsx';
import { getSliderUtilityClass, sliderClasses } from './Slider.classes';

import { unstable_composeClasses as composeClasses, useSlotProps } from '@mui/base';
import { isHostComponent } from '@mui/base/utils';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { SliderValueLabel as BaseSliderValueLabel } from './SliderValueLabel';
import { useSlider, valueToPercent } from './useSlider';
import { shouldSpreadAdditionalProps } from './utils';

const useUtilityClasses = (ownerState: SliderOwnerState) => {
  const { disabled, dragging, marked, orientation, track, classes, color } = ownerState;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      dragging && 'dragging',
      marked && 'marked',
      orientation === 'vertical' && 'vertical',
      track === 'inverted' && 'trackInverted',
      track === false && 'trackFalse',
      color && `color${capitalize(color)}`,
    ],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled', color && `thumbColor${capitalize(color)}`],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible'],
  };

  return composeClasses(slots, getSliderUtilityClass, classes);
};

function Identity(x: number) {
  return x;
}

export const SliderRoot = styled('span', {
  name: 'ESSlider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[`color${capitalize(ownerState.color)}`],
      ownerState.marked && styles.marked,
      ownerState.orientation === 'vertical' && styles.vertical,
      ownerState.track === 'inverted' && styles.trackInverted,
      ownerState.track === false && styles.trackFalse,
    ];
  },
})<{ ownerState: SliderOwnerState }>(({ theme, ownerState: { width } }) => ({
  borderRadius: '8px',
  boxSizing: 'content-box',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  touchAction: 'none',
  WebkitTapHighlightColor: 'transparent',
  '@media print': {
    colorAdjust: 'exact',
  },

  [`&.${sliderClasses.colorPrimary}`]: {
    color: theme.vars.palette.primary[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.primary.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.primary.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.primary.A300}`,
      },
    },
  },
  [`&.${sliderClasses.colorSecondary}`]: {
    color: theme.vars.palette.secondary[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.secondary.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.secondary.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.secondary.A300}`,
      },
    },
  },
  [`&.${sliderClasses.colorError}`]: {
    color: theme.vars.palette.error[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.error.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.error.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.error.A300}`,
      },
    },
  },
  [`&.${sliderClasses.colorInfo}`]: {
    color: theme.vars.palette.info[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.info.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.info.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.info.A300}`,
      },
    },
  },
  [`&.${sliderClasses.colorSuccess}`]: {
    color: theme.vars.palette.success[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.success.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.success.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.success.A300}`,
      },
    },
  },
  [`&.${sliderClasses.colorWarning}`]: {
    color: theme.vars.palette.warning[300],
    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.warning.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 8px ${theme.vars.palette.warning.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.warning.A300}`,
      },
    },
  },
  [`&.${sliderClasses.disabled}`]: {
    pointerEvents: 'none',
    cursor: 'default',
    color: theme.vars.palette.monoA.A200,
    [`& .${sliderClasses.rail}`]: {
      backgroundColor: theme.vars.palette.monoA.A200,
    },
    [`& .${sliderClasses.track}`]: {
      display: 'none',
    },
    [`& .${sliderClasses.thumb}`]: {
      width: '10px',
      height: '10px',
      backdropFilter: 'blur(100px)',
      boxShadow: `0 0 0 2px ${theme.vars.palette.monoB[500]}`,
    },
  },
  [`&.${sliderClasses.dragging}`]: {
    [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
      transition: 'none',
    },
  },
  variants: [
    {
      props: { orientation: 'horizontal' },
      style: {
        height: `${width ?? 4}px`,
        width: '100%',
        padding: '13px 0',
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        '@media (pointer: coarse)': {
          // Reach 42px touch target, about ~8mm on screen.
          padding: '20px 0',
        },
      },
    },
    {
      props: { orientation: 'horizontal', marked: true },
      style: {
        marginBottom: 20,
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        height: '100%',
        width: `${width ?? 4}px`,
        padding: '0 13px',
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        '@media (pointer: coarse)': {
          // Reach 42px touch target, about ~8mm on screen.
          padding: '0 20px',
        },
      },
    },
    {
      props: { orientation: 'vertical', marked: true },
      style: {
        marginRight: 44,
      },
    },
  ],
}));

export const SliderRail = styled('span', {
  name: 'ESSlider',
  slot: 'Rail',
  overridesResolver: (props, styles) => styles.rail,
})(({ theme }) => {
  return {
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    backgroundColor: theme.vars.palette.monoA.A400,
    variants: [
      {
        props: { orientation: 'horizontal' },
        style: {
          width: '100%',
          height: 'inherit',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      },
      {
        props: { orientation: 'vertical' },
        style: {
          height: '100%',
          width: 'inherit',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
    ],
  };
});

export const SliderTrack = styled('span', {
  name: 'ESSlider',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track,
})(({ theme }) => {
  return {
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    backgroundColor: 'currentColor',
    transition: theme.transitions.create(['left', 'width', 'bottom', 'height'], {
      duration: theme.transitions.duration.shortest,
    }),
    transitionTimingFunction: 'linear',

    variants: [
      {
        props: { orientation: 'horizontal' },
        style: {
          height: 'inherit',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      },
      {
        props: { orientation: 'vertical' },
        style: {
          width: 'inherit',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      {
        props: { track: false },
        style: {
          display: 'none',
        },
      },
    ],
  };
});

export const SliderThumb = styled('span', {
  name: 'ESSlider',
  slot: 'Thumb',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.thumb, styles[`thumbColor${capitalize(ownerState.color)}`]];
  },
})(({ theme }) => ({
  position: 'absolute',
  boxSizing: 'border-box',
  borderRadius: '50%',
  outline: 0,
  backgroundColor: 'currentColor',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // transition: theme.transitions.create(['box-shadow', 'left', 'bottom'], {
  //   duration: theme.transitions.duration.shortest,
  // }),

  height: '12px',
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionProperty: 'box-shadow, left, bottom, width, height, opacity',
  transitionTimingFunction: 'linear',
  width: '12px',

  '&::before': {
    position: 'absolute',
    content: '""',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
  },
  '&::after': {
    position: 'absolute',
    content: '""',
    borderRadius: '50%',
    // 42px is the hit target
    width: 42,
    height: 42,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  [`&.${sliderClasses.disabled}`]: {
    '&:hover': {
      boxShadow: 'none',
    },
  },
  [`&.${sliderClasses.focusVisible}`]: {
    width: '14px',
    height: '14px',

    '& .MuiSlider-valueLabel': {
      top: '-8px',
    },
  },
  [`&.${sliderClasses.active}`]: {
    width: '16px',
    height: '16px',

    '& .MuiSlider-valueLabel': {
      top: '-7px',
    },
  },

  variants: [
    {
      props: { orientation: 'horizontal' },
      style: {
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        left: '50%',
        transform: 'translate(-50%, 50%)',
      },
    },
  ],
}));

export const SliderValueLabel = styled(BaseSliderValueLabel, {
  name: 'ESSlider',
  slot: 'ValueLabel',
  overridesResolver: (props, styles) => styles.valueLabel,
})(({ theme }) => ({
  ...theme.typography.caption,
  backgroundColor: theme.vars.palette.monoA.A600,
  borderRadius: '4px',
  color: theme.vars.palette.monoB[500],
  fontWeight: 400,
  minWidth: '22px',
  padding: '4px',
  top: '-9px',
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionProperty: 'transform, top',
  transitionTimingFunction: 'linear',

  '&:before': {
    background: 'none',
    borderColor: `${theme.vars.palette.monoA.A600} transparent transparent transparent`,
    borderStyle: 'solid',
    borderWidth: '5px 5px 0 5px',
    height: 0,
    transform: 'translate(-50%, 100%)',
    width: 0,
  },

  zIndex: 1,
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest,
  }),
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: [
    {
      props: { orientation: 'horizontal' },
      style: {
        transform: 'translateY(-100%) scale(0)',
        top: '-10px',
        transformOrigin: 'bottom center',
        '&::before': {
          position: 'absolute',
          content: '""',
          width: 8,
          height: 8,
          transform: 'translate(-50%, 50%) rotate(45deg)',
          backgroundColor: 'inherit',
          bottom: 0,
          left: '50%',
        },
        [`&.${sliderClasses.valueLabelOpen}`]: {
          transform: 'translateY(-100%) scale(1)',
        },
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        transform: 'translateY(-50%) scale(0)',
        right: '30px',
        top: '50%',
        transformOrigin: 'right center',
        '&::before': {
          position: 'absolute',
          content: '""',
          width: 8,
          height: 8,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          backgroundColor: 'inherit',
          right: -8,
          top: '50%',
        },
        [`&.${sliderClasses.valueLabelOpen}`]: {
          transform: 'translateY(-50%) scale(1)',
        },
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        right: '20px',
      },
    },
  ],
}));

export const SliderMark = styled('span', {
  name: 'ESSlider',
  slot: 'Mark',
  //shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== 'markActive',
  overridesResolver: (props, styles) => {
    const { markActive } = props;

    return [styles.mark, markActive && styles.markActive];
  },
})(({ theme }) => ({
  position: 'absolute',
  width: 2,
  height: 2,
  borderRadius: 1,

  backgroundColor: theme.vars.palette.monoA.A400,

  variants: [
    {
      props: { orientation: 'horizontal' },
      style: {
        top: '50%',
        transform: 'translate(-1px, -50%)',
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        left: '50%',
        transform: 'translate(-50%, 1px)',
      },
    },
    {
      props: { markActive: true },
      style: {
        backgroundColor: theme.vars.palette.monoA.A400,
      },
    },
  ],
}));

export const SliderMarkLabel = styled('span', {
  name: 'ESSlider',
  slot: 'MarkLabel',
  //shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== 'markLabelActive',
  overridesResolver: (props, styles) => styles.markLabel,
})(({ theme }) => ({
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  position: 'absolute',
  whiteSpace: 'nowrap',
  variants: [
    {
      props: { orientation: 'horizontal' },
      style: {
        top: 30,
        transform: 'translateX(-50%)',
        '@media (pointer: coarse)': {
          top: 40,
        },
      },
    },
    {
      props: { orientation: 'vertical' },
      style: {
        left: 36,
        transform: 'translateY(50%)',
        '@media (pointer: coarse)': {
          left: 44,
        },
      },
    },
    {
      props: { markLabelActive: true },
      style: {
        color: (theme.vars || theme).palette.text.primary,
      },
    },
  ],
}));

export const Slider = forwardRef<HTMLSpanElement | null, SliderProps>(function Slider(inputProps, ref) {
  const props = useThemeProps({ props: inputProps, name: 'ESSlider' });

  const {
    'aria-label': ariaLabel,
    'aria-valuetext': ariaValuetext,
    'aria-labelledby': ariaLabelledby,
    component = 'span',

    color = 'primary',
    classes: classesProp,
    className,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = 'horizontal',

    width = 4,
    scale = Identity,
    slotProps,
    slots,
    track = 'normal',
    valueLabelDisplay = 'off',
    valueLabelFormat = Identity,
    disableSwap,
    step,
    shiftStep,
    value: valueProp,
    defaultValue,
    ...other
  } = props;

  const ownerState: SliderOwnerState = {
    classes: classesProp,
    disabled,
    orientation,
    track,
    color,
    width,
  };

  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle,
  } = useSlider({
    ...ownerState,
    marks: marksProp,
    rootRef: ref,
    disableSwap,
    step,
    shiftStep,
    defaultValue,
    value: valueProp,
  });

  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;

  const classes = useUtilityClasses(ownerState);

  const RootSlot = slots?.root ?? SliderRoot;
  const RailSlot = slots?.rail ?? SliderRail;
  const TrackSlot = slots?.track ?? SliderTrack;
  const ThumbSlot = slots?.thumb ?? SliderThumb;
  const ValueLabelSlot = slots?.valueLabel ?? SliderValueLabel;
  const MarkSlot = slots?.mark ?? SliderMark;
  const MarkLabelSlot = slots?.markLabel ?? SliderMarkLabel;
  const InputSlot = slots?.input ?? 'input';

  const rootSlotProps = slotProps?.root;
  const railSlotProps = slotProps?.rail;
  const trackSlotProps = slotProps?.track;
  const thumbSlotProps = slotProps?.thumb;
  const valueLabelSlotProps = slotProps?.valueLabel;
  const markSlotProps = slotProps?.mark;
  const markLabelSlotProps = slotProps?.markLabel;
  const inputSlotProps = slotProps?.input;

  const rootProps = useSlotProps({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: {
      ...(shouldSpreadAdditionalProps(RootSlot) && {
        as: component,
      }),
    },
    ownerState: {
      ...ownerState,
      //...rootSlotProps?.ownerState,
    },
    className: [classes.root, className],
  });

  const railProps = useSlotProps({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail,
  });

  const trackProps = useSlotProps({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: {
        ...axisProps[axis].offset(trackOffset),
        ...axisProps[axis].leap(trackLeap),
      },
    },
    ownerState: {
      ...ownerState,
      //...trackSlotProps?.ownerState,
    },
    className: classes.track,
  });

  const thumbProps = useSlotProps({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: {
      ...ownerState,
      //...thumbSlotProps?.ownerState,
    },
    className: classes.thumb,
  });

  const valueLabelProps = useSlotProps({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: {
      ...ownerState,
      // ...valueLabelSlotProps?.ownerState,
    },
    className: classes.valueLabel,
  });

  const markProps = useSlotProps({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark,
  });

  const markLabelProps = useSlotProps({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState,
    className: classes.markLabel,
  });

  const inputSliderProps = useSlotProps({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState,
    ...other,
  });

  return (
    <RootSlot {...rootProps}>
      <RailSlot {...railProps} />
      <TrackSlot {...trackProps} />
      {marks
        .filter((mark) => mark.value >= min && mark.value <= max)
        .map((mark, index) => {
          const percent = valueToPercent(mark.value, min, max);
          const style = axisProps[axis].offset(percent);

          let markActive;

          if (track === false) {
            markActive = values.indexOf(mark.value) !== -1;
          } else {
            markActive =
              (track === 'normal' &&
                (range
                  ? mark.value >= values[0] && mark.value <= values[values.length - 1]
                  : mark.value <= values[0])) ||
              (track === 'inverted' &&
                (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]));
          }

          return (
            <React.Fragment key={index}>
              <MarkSlot
                data-index={index}
                {...markProps}
                {...(!isHostComponent(MarkSlot) && {
                  markActive,
                })}
                className={clsx(markProps.className, {
                  [classes.markActive]: markActive,
                })}
                style={{ ...style, ...markProps.style }}
              />
              {mark.label !== null && (
                <MarkLabelSlot
                  aria-hidden
                  data-index={index}
                  {...markLabelProps}
                  {...(!isHostComponent(MarkLabelSlot) && {
                    markLabelActive: markActive,
                  })}
                  className={clsx(classes.markLabel, markLabelProps.className, {
                    [classes.markLabelActive]: markActive,
                  })}
                  style={{ ...style, ...markLabelProps.style }}
                >
                  {mark.label}
                </MarkLabelSlot>
              )}
            </React.Fragment>
          );
        })}
      {values.map((value, index) => {
        const percent = valueToPercent(value, min, max);
        const style = axisProps[axis].offset(percent);

        return (
          <ValueLabelSlot
            key={index}
            {...(valueLabelDisplay !== 'off' && {
              valueLabelFormat,
              valueLabelDisplay,
              value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
              index,
              open: open === index || active === index || valueLabelDisplay === 'on',
              disabled,
            })}
            {...valueLabelProps}
          >
            <ThumbSlot
              data-index={index}
              {...thumbProps}
              className={clsx(classes.thumb, thumbProps.className, {
                [classes.active]: active === index,
                [classes.focusVisible]: focusedThumbIndex === index,
              })}
              style={{
                ...style,
                ...getThumbStyle(index),
                ...thumbProps.style,
              }}
            >
              <InputSlot
                aria-label={getAriaLabel ? getAriaLabel(index) : ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-valuenow={scale(value)}
                aria-valuetext={getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext}
                data-index={index}
                value={values[index]}
                {...inputSliderProps}
              />
            </ThumbSlot>
          </ValueLabelSlot>
        );
      })}
    </RootSlot>
  );
});
