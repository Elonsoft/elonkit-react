import { useState } from 'react';

import { AudioPanelProps } from './AudioPanel.types';

import clsx from 'clsx';
import { getAudioPanelUtilityClass } from './AudioPanel.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Divider, dividerClasses, IconButton, iconButtonClasses, sliderClasses } from '@mui/material';

import { IconCloseW350 } from '../../icons';
import { AudioPlayerMenu } from '../AudioPlayer/AudioPlayerMenu';
import { AudioPlayerPlayButton } from '../AudioPlayer/AudioPlayerPlayButton';
import { AudioPlayerProgressBar } from '../AudioPlayer/AudioPlayerProgressBar';
import { AudioPlayerText } from '../AudioPlayer/AudioPlayerText';
import { AudioPlayerTime } from '../AudioPlayer/AudioPlayerTime';
import { AudioPlayerVolume } from '../AudioPlayer/AudioPlayerVolume';
import { useAudioPlayer } from '../AudioPlayer/useAudioPlayer';

type AudioPanelOwnerState = {
  classes?: AudioPanelProps['classes'];
};

const useUtilityClasses = (ownerState: AudioPanelOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    divider: ['divider'],
    closeButton: ['closeButton'],
    control: ['control'],
    controlWrapper: ['controlWrapper'],
    controlGroup: ['controlGroup'],
    progressBarWrapper: ['progressBarWrapper']
  };

  return composeClasses(slots, getAudioPanelUtilityClass, classes);
};

const AudioPanelRoot = styled('div', {
  name: 'ESAudioPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  position: 'relative',
  alignItems: 'center',
  backgroundColor: theme.palette.monoA.A50,
  display: 'flex',
  flexDirection: 'column',

  '&:hover': {
    [`& .${sliderClasses.thumb}`]: {
      opacity: 1
    }
  }
}));

const AudioPanelControlWrapper = styled('div', {
  name: 'ESAudioPanel',
  slot: 'ControlWrapper',
  overridesResolver: (props, styles) => styles.controlWrapper
})({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center'
});

const AudioPanelControl = styled('div', {
  name: 'ESAudioPanel',
  slot: 'Control',
  overridesResolver: (props, styles) => styles.control
})({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '4px'
});

const AudioPanelControlGroup = styled('div', {
  name: 'ESAudioPanel',
  slot: 'ControlGroup',
  overridesResolver: (props, styles) => styles.controlGroup
})({
  display: 'flex',
  alignItems: 'center'
});

const AudioPanelProgressBarWrapper = styled('div', {
  name: 'ESAudioPanel',
  slot: 'ProgressBarWrapper',
  overridesResolver: (props, styles) => styles.progressBarWrapper
})({
  position: 'absolute',
  bottom: '100%',
  width: '100%'
});

const AudioPanelIconButton = styled(IconButton, {
  name: 'ESAudioPanel',
  slot: 'IconButton',
  overridesResolver: (props, styles) => styles.iconButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

const AudioPlayerListDivider = styled(Divider, {
  name: 'ESAudioPlayerText',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.divider
})(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    borderColor: theme.palette.monoA.A100
  }
}));

/**
 * This component is used to embed sound content in documents.
 */
export const AudioPanel = (inProps: AudioPanelProps) => {
  const {
    className,
    sx,
    src,
    step = 10,
    loop,
    reverse,
    audioRef,
    onDownloadClick,
    onClose,
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

    AudioPlayerVolumeProps,
    AudioPlayerPlayButtonProps,
    AudioPlayerProgressBarProps,
    AudioPlayerMenuProps,
    AudioPlayerTimeProps,

    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPanel'
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
    hover,
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
    <AudioPanelRoot className={clsx(classes.root, className)} sx={sx}>
      <AudioPanelProgressBarWrapper>
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
          variant="panel"
          {...AudioPlayerProgressBarProps}
          onTimeChange={onUITimeChange}
          onTimeChangeCommitted={onTimeChangeCommitted}
        />
      </AudioPanelProgressBarWrapper>
      <AudioPanelControlWrapper>
        <AudioPanelControl>
          <AudioPanelControlGroup>
            <AudioPlayerPlayButton {...AudioPlayerPlayButtonProps} isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <AudioPlayerTime
              {...AudioPlayerTimeProps}
              current={current}
              duration={duration}
              isCurrentVisible={isCurrentVisible}
              reverse={reverse}
            />
            <AudioPlayerText caption="caption" text="Text" />
          </AudioPanelControlGroup>
          <AudioPanelControlGroup>
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
              onDownloadClick={onDownloadClick}
              onRateInputChange={onRateInputChange}
            />
          </AudioPanelControlGroup>
        </AudioPanelControl>
        {onClose && (
          <>
            <AudioPlayerListDivider flexItem className={classes.divider} orientation="vertical" />
            <AudioPanelIconButton className={classes.closeButton} onClick={onClose}>
              <IconCloseW350 size="24px" />
            </AudioPanelIconButton>
          </>
        )}
      </AudioPanelControlWrapper>
    </AudioPanelRoot>
  );
};
