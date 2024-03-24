import { forwardRef } from 'react';

import { LinearProgressProps } from './LinearProgress.types';

import clsx from 'clsx';
import { getLinearProgressUtilityClass } from './LinearProgress.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { css, keyframes } from '@mui/system';
import { capitalize } from '@mui/material';

const TRANSITION_DURATION = 4;
const indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;

const bufferKeyframe = keyframes`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;

type LinearProgressOwnerState = {
  classes?: LinearProgressProps['classes'];
  variant: NonNullable<LinearProgressProps['variant']>;
  color: NonNullable<LinearProgressProps['color']>;
};

const useUtilityClasses = (ownerState: LinearProgressOwnerState) => {
  const { classes, variant, color } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color)}`, variant],
    dashed: ['dashed', `dashedColor${capitalize(color)}`],
    bar1: [
      'bar',
      `barColor${capitalize(color)}`,
      (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate',
      variant === 'determinate' && 'bar1Determinate',
      variant === 'buffer' && 'bar1Buffer'
    ],
    bar2: [
      'bar',
      variant !== 'buffer' && `barColor${capitalize(color)}`,
      variant === 'buffer' && `color${capitalize(color)}`,
      (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate',
      variant === 'buffer' && 'bar2Buffer'
    ]
  };

  return composeClasses(slots, getLinearProgressUtilityClass, classes);
};

const LinearProgressRoot = styled('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, styles[`color${capitalize(ownerState.color)}`], styles[ownerState.variant]];
  }
})<{ ownerState: LinearProgressOwnerState }>(({ ownerState }) => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 4,
  zIndex: 0,
  '@media print': {
    colorAdjust: 'exact'
  },
  backgroundColor: 'currentColor',
  ...(ownerState.color === 'inherit' &&
    ownerState.variant !== 'buffer' && {
      backgroundColor: 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'currentColor',
        opacity: 0.3
      }
    }),
  ...(ownerState.variant === 'buffer' && { backgroundColor: 'transparent' }),
  ...(ownerState.variant === 'query' && { transform: 'rotate(180deg)' })
}));

const LinearProgressDashed = styled('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.dashed, styles[`dashedColor${capitalize(ownerState.color)}`]];
  }
})<{ ownerState: LinearProgressOwnerState }>(
  ({ ownerState }) => {
    const backgroundColor = 'currentColor';

    return {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      ...(ownerState.color === 'inherit' && {
        opacity: 0.3
      }),
      backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    };
  },
  css`
    animation: ${bufferKeyframe} 3s infinite linear;
  `
);

const LinearProgressBar1 = styled('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate,
      ownerState.variant === 'determinate' && styles.bar1Determinate,
      ownerState.variant === 'buffer' && styles.bar1Buffer
    ];
  }
})<{ ownerState: LinearProgressOwnerState }>(
  ({ ownerState, theme }) => ({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'left',
    backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main,
    ...(ownerState.variant === 'determinate' && {
      transition: `transform .${TRANSITION_DURATION}s linear`
    }),
    ...(ownerState.variant === 'buffer' && {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`
    })
  }),
  ({ ownerState }) =>
    (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') &&
    css`
      width: auto;
      animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `
);

const LinearProgressBar2 = styled('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate,
      ownerState.variant === 'buffer' && styles.bar2Buffer
    ];
  }
})<{ ownerState: LinearProgressOwnerState }>(
  ({ ownerState, theme }) => ({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'right',
    ...(ownerState.variant !== 'buffer' && {
      backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
    }),
    ...(ownerState.color === 'inherit' && {
      opacity: 0.3
    }),
    ...(ownerState.variant === 'buffer' && {
      backgroundColor: 'currentColor',
      transition: `transform .${TRANSITION_DURATION}s linear`
    })
  }),
  ({ ownerState }) =>
    (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') &&
    css`
      width: auto;
      animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `
);

export const LinearProgress = forwardRef<HTMLButtonElement, LinearProgressProps>(function LinearProgress(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiLinearProgress' });
  const { className, color = 'primary', value, valueBuffer, variant = 'indeterminate', ...other } = props;
  const ownerState = {
    ...props,
    color,
    variant
  };

  const classes = useUtilityClasses(ownerState);
  const isRtl = true;

  const rootProps = {};
  const inlineStyles = { bar1: {}, bar2: {} };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      // rootProps['aria-valuenow'] = Math.round(value);
      // rootProps['aria-valuemin'] = 0;
      // rootProps['aria-valuemax'] = 100;
      let transform = value - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar1 = { transform: `translateX(${transform}%)` };
    }
  }
  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar2 = { transform: `translateX(${transform}%)` };
    }
  }

  return (
    <LinearProgressRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      role="progressbar"
      {...rootProps}
      ref={ref}
      {...other}
    >
      {variant === 'buffer' ? <LinearProgressDashed className={classes.dashed} ownerState={ownerState} /> : null}
      <LinearProgressBar1 className={classes.bar1} ownerState={ownerState} style={inlineStyles.bar1} />
      {variant === 'determinate' ? null : (
        <LinearProgressBar2 className={classes.bar2} ownerState={ownerState} style={inlineStyles.bar2} />
      )}
    </LinearProgressRoot>
  );
});
