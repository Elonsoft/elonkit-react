import { useState } from 'react';

import { AudioPlayerProps } from './AudioPlayer.types';

import clsx from 'clsx';
import { getAudioPlayerUtilityClass } from './AudioPlayer.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { sliderClasses } from '@mui/material';

import { AudioPlayerMenu } from './AudioPlayerMenu';
import { AudioPlayerPlayButton } from './AudioPlayerPlayButton';
import { AudioPlayerProgressBar } from './AudioPlayerProgressBar';
import { AudioPlayerTime } from './AudioPlayerTime';
import { AudioPlayerVolume } from './AudioPlayerVolume';
import { useAudioPlayer } from './useAudioPlayer';

type AudioPlayerOwnerState = {
  classes?: AudioPlayerProps['classes'];
};

const useUtilityClasses = (ownerState: AudioPlayerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    progressWrapper: ['progressWrapper']
  };

  return composeClasses(slots, getAudioPlayerUtilityClass, classes);
};

const AudioPlayerRoot = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.monoA.A50,
  borderRadius: 44,
  display: 'flex',
  padding: '0 4px',

  '&:hover': {
    [`& .${sliderClasses.thumb}`]: {
      opacity: 1
    }
  }
}));

const AudioPlayerProgressWrapper = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'ProgressWrapper',
  overridesResolver: (props, styles) => styles.progressWrapper
})({
  margin: '0 11px',
  width: '100%'
});

/**
 * This component is used to embed sound content in documents.
 */
export const AudioPlayer = (inProps: AudioPlayerProps) => {
  const {
    AudioPlayerVolumeProps,
    AudioPlayerPlayButtonProps,
    AudioPlayerProgressBarProps,
    AudioPlayerMenuProps,
    AudioPlayerTimeProps,
    src,
    loop,
    step,
    reverse,
    audioRef,
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
    // AudioPlayerBaseProps,
    className,
    sx,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayer'
  });

  const [hover, setHover] = useState<number>(1);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const {
    duration,
    isMuted,
    isCurrentVisible,
    isPlaying,
    current,
    rate,
    volume,
    isChanging,
    currentChanging,
    onTogglePlay,
    onToggleMute,
    onVolumeInputChange,
    onRateInputChange,
    onTimeChange,
    onTimeChangeCommitted
  } = useAudioPlayer({
    src,
    loop,
    audioRef,
    hover,
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
    onWaiting
  });

  const onUITimeChange = (event: Event, value: number | number[]) => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    onTimeChange(event, value);
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerRoot className={clsx(classes.root, className)} sx={sx}>
      <AudioPlayerPlayButton {...AudioPlayerPlayButtonProps} isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
      <AudioPlayerTime
        {...AudioPlayerTimeProps}
        current={current}
        duration={duration}
        isCurrentVisible={isCurrentVisible}
        reverse={reverse}
      />
      <AudioPlayerProgressWrapper>
        <AudioPlayerProgressBar
          current={current}
          currentChanging={currentChanging}
          duration={duration}
          hover={hover}
          isChanging={isChanging}
          isCurrentVisible={isCurrentVisible}
          isPlaying={isPlaying}
          reverse={reverse}
          setHover={setHover}
          step={step}
          {...AudioPlayerProgressBarProps}
          onTimeChange={onUITimeChange}
          onTimeChangeCommitted={onTimeChangeCommitted}
        />
      </AudioPlayerProgressWrapper>
      <AudioPlayerVolume
        {...AudioPlayerVolumeProps}
        TooltipProps={TooltipProps}
        isMuted={isMuted}
        volume={volume}
        onChange={onVolumeInputChange}
        onToggleMute={onToggleMute}
      />
      <AudioPlayerMenu
        TooltipProps={TooltipProps}
        {...AudioPlayerMenuProps}
        isMenuOpen={isMenuOpen}
        rate={rate}
        setMenuOpen={setMenuOpen}
        onRateInputChange={onRateInputChange}
      />
    </AudioPlayerRoot>
  );
};
