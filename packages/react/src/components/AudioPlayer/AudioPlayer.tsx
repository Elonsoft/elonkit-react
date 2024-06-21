import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import { AudioPlayerProps } from './AudioPlayer.types';

import clsx from 'clsx';
import { getAudioPlayerUtilityClass } from './AudioPlayer.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TrapFocus from '@mui/material/Unstable_TrapFocus';

import { useAudioPlayerContext } from './AudioPlayer.context';

import { useLatest, useWindowEventListener } from '../../hooks';
import {
  IconArrowLeftW500,
  IconCheckW400,
  IconChevronRightW400,
  IconDotsVerticalW400,
  IconDownloadW400,
  IconPauseW400,
  IconPlayW400,
  IconSpeedometer,
  IconVolumeHigh,
  IconVolumeLow,
  IconVolumeMute,
} from '../../icons';
import { Button } from '../Button';
import { Divider, dividerClasses } from '../Divider';
import { Slider, sliderClasses } from '../Slider';

import { Instance } from '@popperjs/core';

type AudioPlayerOwnerState = {
  classes?: AudioPlayerProps['classes'];
  isPlaying: boolean;
  isOverTrack: boolean;
  isOverThumb: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerOwnerState) => {
  const { classes, isPlaying, isOverTrack, isOverThumb } = ownerState;

  const slots = {
    root: ['root'],
    time: ['time'],
    iconButton: ['iconButton'],
    current: ['current'],
    currentTooltip: [
      'currentTooltip',
      isPlaying && 'currentTooltipPlaying',
      !isPlaying && 'currentTooltipPaused',
      isOverTrack && 'currentTooltipOverTrack',
      isOverThumb && 'currentTooltipOverThumb',
    ],
    currentSlider: ['currentSlider', isPlaying && 'currentSliderPlaying', !isPlaying && 'currentSliderPaused'],
    tooltip: ['tooltip'],
    menu: ['menu'],
    menuList: ['menuList'],
    menuItem: ['menuItem'],
    mainMenuItem: ['mainMenuItem'],
    listItemIcon: ['listItemIcon'],
    listItemText: ['listItemText'],
    listDivider: ['listDivider'],
    rateOpen: ['rateOpen'],
    rateCheck: ['rateCheck'],
    volume: ['volume'],
    volumeSlider: ['volumeSlider'],
  };

  return composeClasses(slots, getAudioPlayerUtilityClass, classes);
};

const AudioPlayerRoot = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.vars.palette.monoA.A50,
  borderRadius: 44,
  display: 'flex',
  padding: '0 4px',

  '&:hover': {
    [`& .${sliderClasses.thumb}`]: {
      opacity: 1,
    },
  },
}));

const AudioPlayerIconButton = styled(Button, {
  name: 'ESAudioPlayer',
  slot: 'IconButton',
  overridesResolver: (props, styles) => styles.iconButton,
})(({ theme }) => ({
  borderRadius: '50%',
  '--icon': theme.vars.palette.monoA.A600,
}));

const AudioPlayerCurrent = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'Current',
  overridesResolver: (props, styles) => styles.current,
})(() => ({
  marginLeft: 11,
  marginRight: 11,
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
}));

const AudioPlayerCurrentTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayer',
    slot: 'CurrentTooltip',
    overridesResolver: (props, styles) => {
      const {
        ownerState: { isPlaying, isOverTrack, isOverThumb },
      } = props;
      return [
        styles.currentTooltip,
        isPlaying && styles.currentTooltipPlaying,
        !isPlaying && styles.currentTooltipPaused,
        isOverTrack && styles.currentTooltipOverTrack,
        isOverThumb && styles.currentTooltipOverThumb,
      ];
    },
  }
)<{ ownerState: AudioPlayerOwnerState }>(({ theme, ownerState }) => ({
  pointerEvents: 'none',

  [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
    height: 7.8,
    marginBottom: '-8px',
  },

  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption,
    color: theme.vars.palette.monoB[500],

    '&::after': {
      content: '""',
      display: ownerState.isOverThumb ? 'none' : 'block',
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: 4,
      backgroundColor: ownerState.isOverTrack
        ? ownerState.isPlaying
          ? theme.vars.palette.black.A400
          : theme.vars.palette.monoA.A600
        : theme.vars.palette.monoA.A150,
      left: '50%',
      transform: 'translateX(-2.3px)',
      top: 'calc(100% + 12px)',
    },
  },
}));

const AudioPlayerCurrentSlider = styled(Slider, {
  name: 'ESAudioPlayer',
  slot: 'CurrentSlider',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isPlaying },
    } = props;
    return [styles.currentSlider, isPlaying && styles.currentSliderPlaying, !isPlaying && styles.currentSliderPaused];
  },
})<{ ownerState: AudioPlayerOwnerState }>(({ theme, ownerState }) => ({
  [`&.${sliderClasses.colorPrimary}`]: {
    padding: '18px 0',

    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        height: 8,
        width: 8,
        boxShadow: `0 0 0 10px ${theme.vars.palette.primary.A150}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        opacity: 1,
        height: 10,
        width: 10,
        boxShadow: `0 0 0 9px ${theme.vars.palette.primary.A400}`,
      },
      [`&.${sliderClasses.active}`]: {
        height: 10,
        width: 10,
        boxShadow: `0 0 0 9px ${theme.vars.palette.primary.A300}`,
      },
    },
    ...(!ownerState.isPlaying && {
      color: theme.vars.palette.monoA.A600,
      [`& .${sliderClasses.thumb}`]: {
        opacity: 0,
        backdropFilter: 'blur(40px)',

        [`&.${sliderClasses.focusVisible}`]: {
          opacity: 1,
          height: 10,
          width: 10,
          boxShadow: `0 0 0 9px ${theme.vars.palette.monoA.A75}`,
        },
      },
    }),
  },
  [`& .${sliderClasses.thumb}`]: {
    opacity: 0,
    height: 8,
    width: 8,

    '&::after': {
      width: 12,
      height: 30,
      borderRadius: 0,
    },
  },
  [`& .${sliderClasses.rail}`]: {
    backgroundColor: theme.vars.palette.monoA.A100,
  },
}));

const AudioPlayerTime = styled(Typography, {
  name: 'ESAudioPlayer',
  slot: 'Time',
  overridesResolver: (props, styles) => styles.time,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A800,
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap',
})) as typeof Typography;

const AudioPlayerTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayer',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 0,
  },
}));

const AudioPlayerMenu = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayer',
    slot: 'Menu',
    overridesResolver: (props, styles) => styles.menu,
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 0,
    backgroundColor: theme.vars.palette.surface[400],
    boxShadow: theme.vars.palette.shadow.down[600],
    backdropFilter: 'none',
    borderRadius: '6px',

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.vars.palette.surface[400],
      backdropFilter: 'none',
    },
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.vars.palette.shadow.down[600],
  },
  [`&[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.vars.palette.shadow.up[600],
  },
}));

const AudioPlayerMenuList = styled(MenuList, {
  name: 'ESAudioPlayer',
  slot: 'MenuList',
  overridesResolver: (props, styles) => styles.menuList,
})(() => ({
  padding: '8px 0',
  width: 168,
  outline: 'none',
}));

const AudioPlayerMenuItem = styled(MenuItem, {
  name: 'ESAudioPlayer',
  slot: 'MenuItem',
  overridesResolver: (props, styles) => styles.menuItem,
})(() => ({
  [`&.${menuItemClasses.root}`]: {
    minHeight: 32,
    padding: '0 16px',
  },
}));

const AudioPlayerMainMenuItem = styled(AudioPlayerMenuItem, {
  name: 'ESAudioPlayer',
  slot: 'MainMenuItem',
  overridesResolver: (props, styles) => styles.mainMenuItem,
})(() => ({
  [`&.${menuItemClasses.root}.${menuItemClasses.root}`]: {
    minHeight: 48,
  },
}));

const AudioPlayerListItemIcon = styled(ListItemIcon, {
  name: 'ESAudioPlayer',
  slot: 'ListItemIcon',
  overridesResolver: (props, styles) => styles.listItemIcon,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,

  '&, &:first-of-type': {
    marginRight: '12px',
  },
}));

const AudioPlayerListItemText = styled(ListItemText, {
  name: 'ESAudioPlayer',
  slot: 'ListItemText',
  overridesResolver: (props, styles) => styles.listItemText,
})(({ theme }) => ({
  margin: 0,
  [`& .${listItemTextClasses.primary}`]: {
    color: theme.vars.palette.monoA.A900,
    fontWeight: 400,
    ...theme.typography.body100,
  },
  [`& .${listItemTextClasses.secondary}`]: {
    color: theme.vars.palette.monoA.A600,
    marginTop: 2,
    ...theme.typography.caption,
  },
}));

const AudioPlayerListDivider = styled(Divider, {
  name: 'ESAudioPlayer',
  slot: 'ListDivider',
  overridesResolver: (props, styles) => styles.listDivider,
})(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    color: theme.vars.palette.monoA.A100,
    margin: '8px 0',
  },
}));

const AudioPlayerRateOpen = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'RateOpen',
  overridesResolver: (props, styles) => styles.rateOpen,
})(({ theme }) => ({
  display: 'inline-flex',
  marginLeft: 12,
  color: theme.vars.palette.monoA.A500,
}));

const AudioPlayerRateCheck = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'RateCheck',
  overridesResolver: (props, styles) => styles.rateCheck,
})(({ theme }) => ({
  display: 'flex',
  color: theme.vars.palette.monoA.A500,
  marginRight: '-4px',
}));

const AudioPlayerVolume = styled(Typography, {
  name: 'ESAudioPlayer',
  slot: 'Volume',
  overridesResolver: (props, styles) => styles.volume,
})(({ theme }) => ({
  display: 'grid',
  gap: 6,
  width: 40,
  paddingTop: 12,
  paddingBottom: 10,
  color: theme.vars.palette.monoB[500],
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 400,
})) as typeof Typography;

const AudioPlayerVolumeButton = styled(AudioPlayerIconButton, {
  name: 'ESAudioPlayer',
  slot: 'VolumeButton',
  overridesResolver: (props, styles) => styles.volumeButton,
})({
  display: 'none',
  '@media (hover) and (pointer: fine)': {
    display: 'flex',
  },
});

const AudioPlayerVolumeSlider = styled(Slider, {
  name: 'ESAudioPlayer',
  slot: 'VolumeSlider',
  overridesResolver: (props, styles) => styles.volumeSlider,
})(({ theme }) => ({
  margin: '3px 0',
  height: 86,
  [`&.${sliderClasses.colorPrimary}`]: {
    color: theme.vars.palette.monoB[500],

    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.vars.palette.monoB.A50}`,
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 7px ${theme.vars.palette.monoB.A150}`,
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.vars.palette.monoB.A200}`,
      },
    },
  },
  [`& .${sliderClasses.rail}`]: {
    backgroundColor: theme.vars.palette.monoB.A400,
  },
}));

const DEFAULT_RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const getTimeValue = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const AudioPlayerTimeValue = ({ time }: { time: number }) => {
  return <>{getTimeValue(time)}</>;
};

/**
 * This component is used to embed sound content in documents.
 */
export const AudioPlayer = (inProps: AudioPlayerProps) => {
  const {
    className,
    sx,
    src,
    rates = DEFAULT_RATES,
    step = 10,
    loop,
    reverse,
    audioRef,
    onDownloadClick,
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onDurationChange,
    onEmptied,
    onEnded,
    onError,
    onLoadedData,
    onLoadedMetadata,
    onLoadStart,
    onPause,
    onPlay,
    onPlaying,
    onProgress,
    onRateChange,
    onSeeked,
    onSeeking,
    onStalled,
    onSuspend,
    onTimeUpdate,
    onVolumeChange,
    onWaiting,

    labelBack,
    labelDownload,
    labelMute,
    labelOptions,
    labelPause,
    labelPlay,
    labelRate,
    labelRateNormal,
    labelUnmute,
    labelCurrent,
    labelVolume,

    iconBack = <IconArrowLeftW500 container containerWidth="16px" />,
    iconDownload = <IconDownloadW400 />,
    iconOptions = <IconDotsVerticalW400 />,
    iconPause = <IconPauseW400 />,
    iconPlay = <IconPlayW400 />,
    iconRate = <IconSpeedometer />,
    iconRateOpen = <IconChevronRightW400 />,
    iconRateCheck = <IconCheckW400 />,
    iconVolumeHigh = <IconVolumeHigh />,
    iconVolumeLow = <IconVolumeLow />,
    iconVolumeOff = <IconVolumeMute />,

    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayer',
  });

  const { volume, setVolume } = useAudioPlayerContext();

  const [audio] = useState(new Audio());

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio]);

  useImperativeHandle(audioRef, () => audio, [audio]);

  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);

  const [isFocused, setFocused] = useState(false);

  const [isCurrentVisible, setCurrentVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState<number>(1);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isRateMenuOpen, setRateMenuOpen] = useState(false);
  const [rate, setRate] = useState(1);

  const [isChanging, setChanging] = useState(false);
  const [currentChanging, setCurrentChanging] = useState(0);

  const [isOverRail, setOverRail] = useState(false);
  const [isOverThumb, setOverThumb] = useState(false);

  const positionRef = useRef({
    x: 0,
    y: 0,
  });

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
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

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onMenuClose = (e: Event | React.SyntheticEvent<Element, Event>) => {
    // Workaround for blur event right after menu button click.
    if (e.type !== 'blur' || e.target !== menuButtonRef.current) {
      setMenuOpen(false);
    }
  };

  const onMenuExited = () => {
    setRateMenuOpen(false);
  };

  const onRateMenuClick = () => {
    setRateMenuOpen(!isRateMenuOpen);
  };

  const onRateMenuClose = () => {
    setRateMenuOpen(false);
  };

  const onRateMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setRateMenuOpen(true);
    }

    if (event.key === 'ArrowLeft') {
      setRateMenuOpen(false);
    }
  };

  const onTogglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const onToggleMute = () => {
    if (audio.muted || volume === 0) {
      if (volume === 0) {
        audio.volume = 1;
      }

      audio.muted = false;
    } else {
      audio.muted = true;
    }
  };

  const onTimeChange = (event: Event, value: number | number[]) => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    if (onSeeking && !isChanging) {
      onSeeking();
    }

    if (event.type === 'input') {
      setCurrentChanging(value as number);
    } else {
      setCurrentChanging(duration * hover);
    }

    setChanging(true);
  };

  const onTimeChangeCommitted = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    if (onSeeked) {
      onSeeked();
    }

    audio.currentTime = event.type === 'change' ? (value as number) : currentChanging;
    setChanging(false);
    setCurrent(audio.currentTime);
    setCurrentVisible(true);
  };

  const onVolumeInputChange = (_: unknown, value: number | number[]) => {
    audio.muted = false;
    audio.volume = (value as number) / 100;
  };

  const onRateInputChange = (value: number) => () => {
    audio.playbackRate = value;
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onAbortLatest = useLatest((event: Event) => {
    if (onAbort) {
      onAbort(event);
    }
  });

  const onCanPlayLatest = useLatest((event: Event) => {
    if (onCanPlay) {
      onCanPlay(event);
    }
  });

  const onCanPlayThroughLatest = useLatest((event: Event) => {
    if (onCanPlayThrough) {
      onCanPlayThrough(event);
    }
  });

  const onDurationChangeLatest = useLatest((event: Event) => {
    const { duration } = event.target as HTMLAudioElement;
    setDuration(duration);

    if (onDurationChange) {
      onDurationChange(event);
    }
  });

  const onEmptiedLatest = useLatest((event: Event) => {
    if (onEmptied) {
      onEmptied(event);
    }
  });

  const onEndedLatest = useLatest((event: Event) => {
    audio.currentTime = 0;
    setPlaying(false);
    setCurrentVisible(false);

    if (onEnded) {
      onEnded(event);
    }
  });

  const onErrorLatest = useLatest((event: Event) => {
    if (onError) {
      onError(event);
    }
  });

  const onLoadedDataLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);

    if (onLoadedData) {
      onLoadedData(event);
    }
  });

  const onLoadedMetadataLatest = useLatest((event: Event) => {
    if (onLoadedMetadata) {
      onLoadedMetadata(event);
    }
  });

  const onLoadStartLatest = useLatest((event: Event) => {
    if (onLoadStart) {
      onLoadStart(event);
    }
  });

  const onPauseLatest = useLatest((event: Event) => {
    setPlaying(false);

    if (onPause) {
      onPause(event);
    }
  });

  const onPlayLatest = useLatest((event: Event) => {
    setPlaying(true);
    setCurrentVisible(true);

    if (onPlay) {
      onPlay(event);
    }
  });

  const onPlayingLatest = useLatest((event: Event) => {
    if (onPlaying) {
      onPlaying(event);
    }
  });

  const onProgressLatest = useLatest((event: Event) => {
    if (onProgress) {
      onProgress(event);
    }
  });

  const onRateChangeLatest = useLatest((event: Event) => {
    const { playbackRate } = event.target as HTMLAudioElement;
    setRate(playbackRate);

    if (onRateChange) {
      onRateChange(event);
    }
  });

  const onStalledLatest = useLatest((event: Event) => {
    if (onStalled) {
      onStalled(event);
    }
  });

  const onSuspendLatest = useLatest((event: Event) => {
    if (onSuspend) {
      onSuspend(event);
    }
  });

  const onTimeUpdateLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);

    if (onTimeUpdate) {
      onTimeUpdate(event);
    }
  });

  const onVolumeChangeLatest = useLatest((event: Event) => {
    const { volume, muted } = event.target as HTMLAudioElement;
    setVolume(Math.round(volume * 100));
    setMuted(muted);

    if (onVolumeChange) {
      onVolumeChange(event);
    }
  });

  const onWaitingLatest = useLatest((event: Event) => {
    if (onWaiting) {
      onWaiting(event);
    }
  });

  useEffect(() => {
    const onAudioAbort = (event: Event) => {
      onAbortLatest.current(event);
    };

    const onAudioCanPlay = (event: Event) => {
      onCanPlayLatest.current(event);
    };

    const onAudioCanPlayThrough = (event: Event) => {
      onCanPlayThroughLatest.current(event);
    };

    const onAudioDurationChange = (event: Event) => {
      onDurationChangeLatest.current(event);
    };

    const onAudioEmptied = (event: Event) => {
      onEmptiedLatest.current(event);
    };

    const onAudioEnded = (event: Event) => {
      onEndedLatest.current(event);
    };

    const onAudioError = (event: Event) => {
      onErrorLatest.current(event);
    };

    const onAudioLoadedData = (event: Event) => {
      onLoadedDataLatest.current(event);
    };

    const onAudioLoadedMetadata = (event: Event) => {
      onLoadedMetadataLatest.current(event);
    };

    const onAudioLoadStart = (event: Event) => {
      onLoadStartLatest.current(event);
    };

    const onAudioPause = (event: Event) => {
      onPauseLatest.current(event);
    };

    const onAudioPlay = (event: Event) => {
      onPlayLatest.current(event);
    };

    const onAudioPlaying = (event: Event) => {
      onPlayingLatest.current(event);
    };

    const onAudioProgress = (event: Event) => {
      onProgressLatest.current(event);
    };

    const onAudioRateChange = (event: Event) => {
      onRateChangeLatest.current(event);
    };

    const onAudioStalled = (event: Event) => {
      onStalledLatest.current(event);
    };

    const onAudioSuspend = (event: Event) => {
      onSuspendLatest.current(event);
    };

    const onAudioTimeUpdate = (event: Event) => {
      onTimeUpdateLatest.current(event);
    };

    const onAudioVolumeChange = (event: Event) => {
      onVolumeChangeLatest.current(event);
    };

    const onAudioWaiting = (event: Event) => {
      onWaitingLatest.current(event);
    };

    audio.addEventListener('abort', onAudioAbort);
    audio.addEventListener('canplay', onAudioCanPlay);
    audio.addEventListener('canplaythrough', onAudioCanPlayThrough);
    audio.addEventListener('durationchange', onAudioDurationChange);
    audio.addEventListener('emptied', onAudioEmptied);
    audio.addEventListener('ended', onAudioEnded);
    audio.addEventListener('error', onAudioError);
    audio.addEventListener('loadeddata', onAudioLoadedData);
    audio.addEventListener('loadedmetadata', onAudioLoadedMetadata);
    audio.addEventListener('loadstart', onAudioLoadStart);
    audio.addEventListener('pause', onAudioPause);
    audio.addEventListener('play', onAudioPlay);
    audio.addEventListener('playing', onAudioPlaying);
    audio.addEventListener('progress', onAudioProgress);
    audio.addEventListener('ratechange', onAudioRateChange);
    audio.addEventListener('stalled', onAudioStalled);
    audio.addEventListener('suspend', onAudioSuspend);
    audio.addEventListener('timeupdate', onAudioTimeUpdate);
    audio.addEventListener('volumechange', onAudioVolumeChange);
    audio.addEventListener('waiting', onAudioWaiting);

    return () => {
      audio.removeEventListener('abort', onAudioAbort);
      audio.removeEventListener('canplay', onAudioCanPlay);
      audio.removeEventListener('canplaythrough', onAudioCanPlayThrough);
      audio.removeEventListener('durationchange', onAudioDurationChange);
      audio.removeEventListener('emptied', onAudioEmptied);
      audio.removeEventListener('ended', onAudioEnded);
      audio.removeEventListener('error', onAudioError);
      audio.removeEventListener('loadeddata', onAudioLoadedData);
      audio.removeEventListener('loadedmetadata', onAudioLoadedMetadata);
      audio.removeEventListener('loadstart', onAudioLoadStart);
      audio.removeEventListener('pause', onAudioPause);
      audio.removeEventListener('play', onAudioPlay);
      audio.removeEventListener('playing', onAudioPlaying);
      audio.removeEventListener('progress', onAudioProgress);
      audio.removeEventListener('ratechange', onAudioRateChange);
      audio.removeEventListener('stalled', onAudioStalled);
      audio.removeEventListener('suspend', onAudioSuspend);
      audio.removeEventListener('timeupdate', onAudioTimeUpdate);
      audio.removeEventListener('volumechange', onAudioVolumeChange);
      audio.removeEventListener('waiting', onAudioWaiting);
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio, volume]);

  useEffect(() => {
    audio.src = src;
  }, [audio, src]);

  useEffect(() => {
    audio.loop = !!loop;
  }, [audio, loop]);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

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

  const isOverTrack = duration * hover < current;
  const ownerState = {
    ...props,
    isPlaying,
    isOverThumb: isOverThumb || isChanging || (isFocused && !isOverRail),
    isOverTrack,
  };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerRoot className={clsx(classes.root, className)} sx={sx}>
      <AudioPlayerIconButton aria-label={isPlaying ? labelPause : labelPlay} size="400" onClick={onTogglePlay}>
        {isPlaying ? iconPause : iconPlay}
      </AudioPlayerIconButton>
      <AudioPlayerTime className={classes.time} variant="caption">
        <AudioPlayerTimeValue time={isCurrentVisible ? (reverse ? duration - current : current) : duration} />
      </AudioPlayerTime>
      <AudioPlayerCurrent className={classes.current}>
        <AudioPlayerCurrentTooltip
          arrow
          PopperProps={{
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0);
              },
            },
          }}
          className={classes.currentTooltip}
          open={isFocused || isOverRail}
          ownerState={ownerState}
          placement="top"
          title={<AudioPlayerTimeValue time={isChanging ? currentChanging : isOverRail ? duration * hover : current} />}
        >
          <AudioPlayerCurrentSlider
            ref={sliderRef}
            aria-label={labelCurrent}
            className={classes.currentSlider}
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
        </AudioPlayerCurrentTooltip>
      </AudioPlayerCurrent>
      <AudioPlayerTooltip
        arrow
        disableFocusListener
        disableTouchListener
        className={classes.tooltip}
        placement="top"
        title={
          <AudioPlayerVolume>
            <AudioPlayerVolumeSlider
              aria-label={labelVolume}
              color="primary"
              max={100}
              min={0}
              orientation="vertical"
              value={isMuted ? 0 : volume}
              onChange={onVolumeInputChange}
            />
            <Typography variant="body100">{isMuted ? 0 : volume}</Typography>
          </AudioPlayerVolume>
        }
        {...TooltipProps}
      >
        <AudioPlayerVolumeButton
          aria-label={isMuted || volume === 0 ? labelUnmute : labelMute}
          className={classes.iconButton}
          size="400"
          onClick={onToggleMute}
        >
          {isMuted || volume === 0 ? iconVolumeOff : volume <= 50 ? iconVolumeLow : iconVolumeHigh}
        </AudioPlayerVolumeButton>
      </AudioPlayerTooltip>
      <AudioPlayerMenu
        arrow
        disableHoverListener
        disableTouchListener
        TransitionProps={{ onExited: onMenuExited }}
        className={classes.menu}
        open={isMenuOpen}
        placement="top"
        title={
          isRateMenuOpen ? (
            <TrapFocus open={isMenuOpen}>
              <div style={{ outline: 'none' }} tabIndex={-1} onKeyDown={onRateMenuKeyDown} onMouseDown={onMouseDown}>
                <AudioPlayerMenuList className={classes.menuList}>
                  <AudioPlayerMenuItem autoFocus className={classes.menuItem} onClick={onRateMenuClose}>
                    <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconBack}</AudioPlayerListItemIcon>
                    <AudioPlayerListItemText className={classes.listItemText} primary={labelBack} />
                  </AudioPlayerMenuItem>
                  <AudioPlayerListDivider className={classes.listDivider} />
                  {rates.map((r) => (
                    <AudioPlayerMenuItem
                      key={r}
                      className={classes.menuItem}
                      selected={r === rate}
                      onClick={onRateInputChange(r)}
                    >
                      <AudioPlayerListItemText
                        className={classes.listItemText}
                        primary={r === 1 ? labelRateNormal : r}
                      />
                      {r === rate && (
                        <AudioPlayerRateCheck className={classes.rateCheck}>{iconRateCheck}</AudioPlayerRateCheck>
                      )}
                    </AudioPlayerMenuItem>
                  ))}
                </AudioPlayerMenuList>
              </div>
            </TrapFocus>
          ) : (
            <TrapFocus open={isMenuOpen}>
              <AudioPlayerMenuList className={classes.menuList} tabIndex={-1} onMouseDown={onMouseDown}>
                <AudioPlayerMainMenuItem
                  autoFocus
                  className={classes.mainMenuItem}
                  onClick={onRateMenuClick}
                  onKeyDown={onRateMenuKeyDown}
                >
                  <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconRate}</AudioPlayerListItemIcon>
                  <AudioPlayerListItemText
                    className={classes.listItemText}
                    primary={labelRate}
                    secondary={rate === 1 ? labelRateNormal : rate}
                  />
                  <AudioPlayerRateOpen className={classes.rateOpen}>{iconRateOpen}</AudioPlayerRateOpen>
                </AudioPlayerMainMenuItem>
                {!!onDownloadClick && (
                  <AudioPlayerMainMenuItem className={classes.mainMenuItem} onClick={onDownloadClick}>
                    <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconDownload}</AudioPlayerListItemIcon>
                    <AudioPlayerListItemText className={classes.listItemText} primary={labelDownload} />
                  </AudioPlayerMainMenuItem>
                )}
              </AudioPlayerMenuList>
            </TrapFocus>
          )
        }
        onClose={onMenuClose}
        {...TooltipProps}
      >
        <AudioPlayerIconButton
          ref={menuButtonRef}
          aria-label={labelOptions}
          className={classes.iconButton}
          size="400"
          onClick={onMenuClick}
        >
          {iconOptions}
        </AudioPlayerIconButton>
      </AudioPlayerMenu>
    </AudioPlayerRoot>
  );
};
