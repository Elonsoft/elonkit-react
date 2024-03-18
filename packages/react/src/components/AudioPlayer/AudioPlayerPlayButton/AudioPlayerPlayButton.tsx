import { AudioPlayerPlayButtonProps } from './AudioPlayerPlayButton.types';

import clsx from 'clsx';
import { getAudioPlayerPlayButtonUtilityClass } from './AudioPlayerPlayButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';

import { IconPauseW400, IconPlayW400, IconSkipBack, IconSkipForward } from '../../../icons';

type AudioPlayerPlayButtonOwnerState = {
  classes?: AudioPlayerPlayButtonProps['classes'];
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerPlayButtonOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    playButton: ['playButton'],
    prevButton: ['prevButton'],
    nextButton: ['nextButton']
  };

  return composeClasses(slots, getAudioPlayerPlayButtonUtilityClass, classes);
};

const AudioPlayerPlayButtonRoot = styled('div', {
  name: 'ESAudioPlayerPlayButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex'
});

const AudioPlayerPlayButtonPlay = styled(IconButton, {
  name: 'ESAudioPlayerPlayButton',
  slot: 'PlayButton',
  overridesResolver: (props, styles) => styles.playButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

const AudioPlayerPlayButtonPrev = styled(IconButton, {
  name: 'ESAudioPlayerPlayButton',
  slot: 'PrevButton',
  overridesResolver: (props, styles) => styles.prevButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

const AudioPlayerPlayButtonNext = styled(IconButton, {
  name: 'ESAudioPlayerPlayButton',
  slot: 'NextButton',
  overridesResolver: (props, styles) => styles.nextButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));
/**
 * The AudioPlayerPlayButton displays information and actions relating to the current screen.
 */
export const AudioPlayerPlayButton = (inProps: AudioPlayerPlayButtonProps) => {
  const {
    className,
    iconPause = <IconPauseW400 />,
    iconPlay = <IconPlayW400 />,
    iconPrev = <IconSkipBack />,
    iconNext = <IconSkipForward />,
    isPlaying,
    labelPause,
    labelPlay,
    labelPrev,
    labeNext,
    onTogglePlay,
    onPrev,
    onNext,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerPlayButton'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerPlayButtonRoot className={clsx(classes.root, className)}>
      {onPrev && (
        <AudioPlayerPlayButtonPrev aria-label={labelPrev} className={classes.prevButton} size="32" onClick={onPrev}>
          {iconPrev}
        </AudioPlayerPlayButtonPrev>
      )}
      <AudioPlayerPlayButtonPlay
        aria-label={isPlaying ? labelPause : labelPlay}
        className={classes.playButton}
        size="32"
        onClick={onTogglePlay}
      >
        {isPlaying ? iconPause : iconPlay}
      </AudioPlayerPlayButtonPlay>

      {onNext && (
        <AudioPlayerPlayButtonNext aria-label={labeNext} className={classes.nextButton} size="32" onClick={onNext}>
          {iconNext}
        </AudioPlayerPlayButtonNext>
      )}
    </AudioPlayerPlayButtonRoot>
  );
};
