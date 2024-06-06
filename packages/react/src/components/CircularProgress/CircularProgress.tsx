import { forwardRef } from 'react';

import { CircularProgressProps } from './CircularProgress.types';

import clsx from 'clsx';
import { getCircularProgressUtilityClass } from './CircularProgress.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { css, keyframes } from '@mui/system';
import { capitalize } from '@mui/material';

const SIZE = 44;

const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

type CircularProgressOwnerState = {
  classes?: CircularProgressProps['classes'];
  variant: NonNullable<CircularProgressProps['variant']>;
  color: NonNullable<CircularProgressProps['color']>;
  disableShrink: NonNullable<CircularProgressProps['disableShrink']>;
  thickness: NonNullable<CircularProgressProps['thickness']>;
  value: NonNullable<CircularProgressProps['value']>;
};

const useUtilityClasses = (ownerState: CircularProgressOwnerState) => {
  const { classes, variant, color, disableShrink } = ownerState;

  const slots = {
    root: ['root', variant, `color${capitalize(color)}`],
    svg: ['svg'],
    circle: ['circle', `circle${capitalize(variant)}`, disableShrink && 'circleDisableShrink']
  };

  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};

const CircularProgressRoot = styled('span', {
  name: 'ESCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})<{ ownerState: CircularProgressOwnerState }>(({ ownerState: { color, variant }, theme }) => ({
  display: 'inline-block',
  color: theme.vars.palette[color][300],
  transform: 'rotate(-90deg)',
  ...(variant === 'determinate' && {
    transition: theme.transitions.create('transform')
  }),
  ...(variant === 'indeterminate' && {
    animation: `${circularRotateKeyframe} 1.4s linear infinite`
  })
}));

const CircularProgressSVG = styled('svg', {
  name: 'ESCircularProgress',
  slot: 'Svg',
  overridesResolver: (props, styles) => styles.svg
})({
  display: 'block'
});

const CircularProgressCircle = styled('circle', {
  name: 'ESCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.circle,
      styles[`circle${capitalize(ownerState.variant)}`],
      ownerState.disableShrink && styles.circleDisableShrink
    ];
  }
})<{ ownerState: CircularProgressOwnerState }>(
  ({ ownerState: { variant, thickness, value }, theme }) => ({
    stroke: 'currentColor',
    ...(variant === 'determinate' && {
      transition: theme.transitions.create('stroke-dashoffset'),
      strokeDasharray: (2 * Math.PI * ((SIZE - thickness) / 2)).toFixed(3),
      strokeDashoffset: `${(((100 - value) / 100) * (2 * Math.PI * ((SIZE - thickness) / 2))).toFixed(3)}px`
    }),
    ...(variant === 'indeterminate' && {
      strokeDasharray: '80px, 200px',
      strokeDashoffset: 0,
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    })
  }),
  ({ ownerState }) =>
    ownerState.variant === 'indeterminate' &&
    css`
      animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
    `
);

const CircularProgressCircleBackground = styled('circle', {
  name: 'ESCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.circle,
      styles[`circle${capitalize(ownerState.variant)}`],
      ownerState.disableShrink && styles.circleDisableShrink
    ];
  }
})<{ ownerState: CircularProgressOwnerState }>(({ ownerState: { color }, theme }) => ({
  stroke: theme.vars.palette[color].A400,
  transition: theme.transitions.create('stroke-dashoffset')
}));

export const CircularProgress = forwardRef<HTMLButtonElement, CircularProgressProps>(
  function CircularProgress(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'ESCircularProgress' });
    const {
      className,
      color = 'primary',
      disableShrink = false,
      size = 40,
      thickness = 3.6,
      value = 0,
      variant = 'indeterminate',
      ...other
    } = props;

    const ownerState = {
      color,
      disableShrink,
      size,
      thickness,
      value,
      variant,
      ...props
    };

    const classes = useUtilityClasses(ownerState);

    // const circleStyle = {};
    // const rootStyle = {};
    // const rootProps = {};

    // if (variant === 'determinate') {
    //   const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    //   circleStyle.strokeDasharray = circumference.toFixed(3);
    //   circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
    //   rootStyle.transform = 'rotate(-90deg)';
    // }

    return (
      <CircularProgressRoot
        ref={ref}
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        role="progressbar"
        style={{ width: size, height: size }}
        {...other}
      >
        <CircularProgressSVG className={classes.svg} viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
          <CircularProgressCircle
            className={classes.circle}
            cx={SIZE}
            cy={SIZE}
            fill="none"
            ownerState={ownerState}
            r={(SIZE - thickness) / 2}
            strokeWidth={thickness}
          />
          <CircularProgressCircleBackground
            className={classes.circle}
            cx={SIZE}
            cy={SIZE}
            fill="none"
            ownerState={ownerState}
            r={(SIZE - thickness) / 2}
            strokeWidth={thickness}
          />
        </CircularProgressSVG>
      </CircularProgressRoot>
    );
  }
);
