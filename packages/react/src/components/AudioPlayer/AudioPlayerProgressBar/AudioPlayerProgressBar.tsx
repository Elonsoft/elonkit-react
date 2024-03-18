import { useEffect, useRef, useState } from 'react';

import { AudioPlayerProgressBarProps } from './AudioPlayerProgressBar.types';

import clsx from 'clsx';
import { getAudioPlayerProgressBarUtilityClass } from './AudioPlayerProgressBar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Slider, sliderClasses, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

import { useWindowEventListener } from '../../../hooks';

import { Instance } from '@popperjs/core';

type AudioPlayerProgressBarOwnerState = {
  classes?: AudioPlayerProgressBarProps['classes'];
  variant?: AudioPlayerProgressBarProps['variant'];
  isPlaying: boolean;
  isOverTrack: boolean;
  isOverThumb: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerProgressBarOwnerState) => {
  const { classes, isPlaying, isOverTrack, isOverThumb } = ownerState;

  const slots = {
    root: ['root'],
    tooltip: [
      'tooltip',
      isPlaying && 'tooltipPlaying',
      !isPlaying && 'tooltipPaused',
      isOverTrack && 'tooltipOverTrack',
      isOverThumb && 'tooltipOverThumb'
    ],
    slider: ['slider', isPlaying && 'sliderPlaying', !isPlaying && 'sliderPaused']
  };

  return composeClasses(slots, getAudioPlayerProgressBarUtilityClass, classes);
};

const AudioPlayerProgressBarRoot = styled('div', {
  name: 'ESAudioPlayerProgressBar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center'
}));

const AudioPlayerProgressBarTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayerProgressBar',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => {
      const {
        ownerState: { isPlaying, isOverTrack, isOverThumb }
      } = props;
      return [
        styles.tooltip,
        isPlaying && styles.tooltipPlaying,
        !isPlaying && styles.tooltipPaused,
        isOverTrack && styles.tooltipOverTrack,
        isOverThumb && styles.tooltipOverThumb
      ];
    }
  }
)<{ ownerState: AudioPlayerProgressBarOwnerState }>(({ theme, ownerState }) => ({
  pointerEvents: 'none',

  [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
    height: 7.8,
    marginBottom: '-8px'
  },

  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption,
    color: theme.palette.monoB[500],

    '&::after': {
      content: '""',
      display: ownerState.isOverThumb ? 'none' : 'block',
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: 4,
      backgroundColor: ownerState.isOverTrack
        ? ownerState.isPlaying
          ? theme.palette.black.A400
          : theme.palette.monoA.A600
        : theme.palette.monoA.A150,
      left: '50%',
      transform: 'translateX(-2.3px)',
      top: 'calc(100% + 12px)'
    }
  }
}));

const AudioPlayerProgressBarCurrentSlider = styled(Slider, {
  name: 'ESAudioPlayerProgressBar',
  slot: 'Slider',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isPlaying }
    } = props;
    return [styles.currentSlider, isPlaying && styles.currentSliderPlaying, !isPlaying && styles.currentSliderPaused];
  }
})<{ ownerState: AudioPlayerProgressBarOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.variant === 'panel' && {
    padding: 0,
    '&:hover': {
      height: 8,
      [`&.${sliderClasses.colorPrimary}`]: {}
    }
  }),

  [`&.${sliderClasses.colorPrimary}`]: {
    ...(ownerState.variant === 'panel'
      ? {
          borderRadius: '0 2px 2px 0'
        }
      : { padding: '18px 0' }),

    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        height: ownerState.variant === 'panel' ? 12 : 8,
        width: ownerState.variant === 'panel' ? 4 : 8,
        boxShadow: `0 0 0 8px ${theme.palette.primary.A150}`
      },
      [`&.${sliderClasses.focusVisible}`]: {
        height: ownerState.variant === 'panel' ? 12 : 10,
        width: ownerState.variant === 'panel' ? 4 : 10,
        opacity: 1,
        boxShadow: `0 0 0 9px ${theme.palette.primary.A400}`
      },
      [`&.${sliderClasses.active}`]: {
        height: ownerState.variant === 'panel' ? 12 : 10,
        width: ownerState.variant === 'panel' ? 4 : 10,
        boxShadow: `0 0 0 9px ${theme.palette.primary.A300}`
      }
    },
    ...(!ownerState.isPlaying && {
      color: theme.palette.monoA.A600,
      [`& .${sliderClasses.thumb}`]: {
        opacity: 0,
        backdropFilter: 'blur(40px)',
        [`&.${sliderClasses.focusVisible}`]: {
          opacity: 1,
          height: ownerState.variant === 'panel' ? 12 : 10,
          width: ownerState.variant === 'panel' ? 4 : 10,
          boxShadow: `0 0 0 9px ${theme.palette.monoA.A75}`
        }
      }
    })
  },
  [`& .${sliderClasses.thumb}`]: {
    opacity: 0,
    ...(ownerState.variant === 'panel'
      ? {
          height: 12,
          width: 4,
          borderRadius: 2,
          transform: 'translateY(-50%)'
        }
      : { height: 8, width: 8 }),

    '&::after': {
      width: 12,
      height: 30,
      borderRadius: 0
    }
  },
  [`& .${sliderClasses.rail}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.monoA.A100,
    width: '100%',
    transform: 'translateY(-50%)'
  },
  [`& .${sliderClasses.track}`]: {
    transform: 'translateY(-50%)'
  }
}));

const getTimeValue = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const AudioPlayerProgressBarTimeValue = ({ time }: { time: number }) => {
  return <>{getTimeValue(time)}</>;
};

/**
 * The AudioPlayerProgressBar displays information and actions relating to the current screen.
 */
export const AudioPlayerProgressBar = (inProps: AudioPlayerProgressBarProps) => {
  const {
    className,
    duration,
    current,
    setHover,
    isChanging,
    currentChanging,
    hover,
    variant = 'default',
    labelCurrent,
    step,
    onTimeChangeCommitted,
    onTimeChange,
    isPlaying = false,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerProgressBar'
  });

  const [isFocused, setFocused] = useState(false);
  const [isOverRail, setOverRail] = useState(false);
  const [isOverThumb, setOverThumb] = useState(false);

  const isOverTrack = duration * hover < current;

  // console.log(isPlaying);

  const ownerState = {
    ...props,
    variant,
    isPlaying,
    isOverThumb: isOverThumb || isChanging || (isFocused && !isOverRail),
    isOverTrack
  };

  const classes = useUtilityClasses(ownerState);

  const positionRef = useRef({
    x: 0,
    y: 0
  });

  const sliderRef = useRef<HTMLElement | null>(null);
  const popperRef = useRef<Instance | null>(null);

  const onFocus = () => {
    requestAnimationFrame(() => {
      if (sliderRef.current) {
        const focusedThumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}.${sliderClasses.focusVisible}`);
        setFocused(!!focusedThumb);
      }
    });
  };

  const onBlur = () => {
    setFocused(false);
  };

  const onPointerMove = (event: React.PointerEvent | PointerEvent) => {
    if (sliderRef.current) {
      const { left, right, top, bottom } = sliderRef.current.getBoundingClientRect();
      const clientX = Math.min(right, Math.max(left, event.clientX));
      setHover((clientX - left) / (right - left));
      if (popperRef.current) {
        positionRef.current = { x: clientX, y: (top + bottom) / 2 };
        popperRef.current.update();
      }
    }
  };

  const onPointerEnter = (event: React.PointerEvent) => {
    setOverRail(true);
    requestAnimationFrame(() => {
      onPointerMove(event);
    });
  };

  const onPointerLeave = () => {
    setOverRail(false);
  };

  useEffect(() => {
    let handle: number | null = null;

    const animation = () => {
      if (sliderRef.current && popperRef.current) {
        const thumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}`);
        if (thumb) {
          const { top, bottom } = sliderRef.current.getBoundingClientRect();
          const { left, right } = thumb.getBoundingClientRect();
          positionRef.current = { x: (left + right) / 2, y: (top + bottom) / 2 };
          popperRef.current.update();
        }
      }
      handle = requestAnimationFrame(animation);
    };

    if (isFocused && !isOverRail && sliderRef.current) {
      animation();
    }

    return () => {
      if (handle) {
        cancelAnimationFrame(handle);
      }
    };
  }, [isFocused, isOverRail]);

  useEffect(() => {
    if (sliderRef.current) {
      const thumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}`);

      if (thumb) {
        const onMouseEnter = () => {
          setOverThumb(true);
        };

        const onMouseLeave = () => {
          setOverThumb(false);
        };

        thumb.addEventListener('mouseenter', onMouseEnter);
        thumb.addEventListener('mouseleave', onMouseLeave);

        return () => {
          thumb.removeEventListener('mouseenter', onMouseEnter);
          thumb.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    }
  }, [sliderRef.current]);

  useWindowEventListener('pointermove', onPointerMove);

  return (
    <AudioPlayerProgressBarRoot className={clsx(classes.root, className)}>
      <AudioPlayerProgressBarTooltip
        arrow
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0);
            }
          }
        }}
        className={classes.tooltip}
        open={isFocused || isOverRail}
        ownerState={ownerState}
        placement="top"
        title={
          <AudioPlayerProgressBarTimeValue
            time={isChanging ? currentChanging : isOverRail ? duration * hover : current}
          />
        }
      >
        <AudioPlayerProgressBarCurrentSlider
          ref={sliderRef}
          aria-label={labelCurrent}
          className={classes.slider}
          color="primary"
          max={duration}
          min={0}
          ownerState={ownerState}
          step={step}
          value={isChanging ? currentChanging : current}
          onBlur={onBlur}
          onChange={onTimeChange}
          onChangeCommitted={onTimeChangeCommitted}
          onFocus={onFocus}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        />
      </AudioPlayerProgressBarTooltip>
    </AudioPlayerProgressBarRoot>
  );
};
