import { AudioPlayerVolumeProps } from './AudioPlayerVolume.types';

import clsx from 'clsx';
import { getAudioPlayerVolumeUtilityClass } from './AudioPlayerVolume.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import {
  IconButton,
  iconButtonClasses,
  Slider,
  sliderClasses,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography
} from '@mui/material';

import { IconVolumeHigh, IconVolumeLow, IconVolumeMute } from '../../../icons';

type AudioPlayerVolumeOwnerState = {
  classes?: AudioPlayerVolumeProps['classes'];
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerVolumeOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    slider: ['slider'],
    sliderWrapper: ['sliderWrapper'],
    volumeButton: ['volumeButton']
  };

  return composeClasses(slots, getAudioPlayerVolumeUtilityClass, classes);
};

const AudioPlayerVolumeRoot = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayerVolume',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 0
  }
}));

const AudioPlayerVolumeSliderWrapper = styled(Typography, {
  name: 'ESAudioPlayerVolume',
  slot: 'SliderWrapper',
  overridesResolver: (props, styles) => styles.sliderWrapper
})(({ theme }) => ({
  display: 'grid',
  gap: 6,
  width: 40,
  paddingTop: 12,
  paddingBottom: 10,
  color: theme.palette.monoB[500],
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 400
})) as typeof Typography;

const AudioPlayerVolumeButton = styled(IconButton, {
  name: 'ESAudioPlayerVolume',
  slot: 'VolumeButton',
  overridesResolver: (props, styles) => styles.volumeButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  },
  display: 'none',
  '@media (hover) and (pointer: fine)': {
    display: 'flex'
  }
}));

const AudioPlayerVolumeSlider = styled(Slider, {
  name: 'ESAudioPlayerVolume',
  slot: 'Slider',
  overridesResolver: (props, styles) => styles.slider
})(({ theme }) => ({
  margin: '3px 0',
  height: 86,
  [`&.${sliderClasses.colorPrimary}`]: {
    color: theme.palette.monoB[500],

    [`& .${sliderClasses.thumb}`]: {
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.palette.monoB.A50}`
      },
      [`&.${sliderClasses.focusVisible}`]: {
        boxShadow: `0 0 0 7px ${theme.palette.monoB.A150}`
      },
      [`&.${sliderClasses.active}`]: {
        boxShadow: `0 0 0 6px ${theme.palette.monoB.A200}`
      }
    }
  },
  [`& .${sliderClasses.rail}`]: {
    backgroundColor: theme.palette.monoB.A400
  }
}));

/**
 * The AudioPlayerVolume displays information and actions relating to the current screen.
 */
export const AudioPlayerVolume = (inProps: AudioPlayerVolumeProps) => {
  const {
    className,
    labelVolume,
    isMuted,
    volume,
    onChange,
    TooltipProps,
    labelMute,
    labelUnmute,
    iconVolumeHigh = <IconVolumeHigh />,
    iconVolumeLow = <IconVolumeLow />,
    iconVolumeOff = <IconVolumeMute />,
    onToggleMute,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerVolume'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerVolumeRoot
      arrow
      disableFocusListener
      disableTouchListener
      className={clsx(classes.root, className)}
      placement="top"
      title={
        <AudioPlayerVolumeSliderWrapper>
          <AudioPlayerVolumeSlider
            aria-label={labelVolume}
            className={classes.slider}
            color="primary"
            max={100}
            min={0}
            orientation="vertical"
            value={isMuted ? 0 : volume}
            onChange={onChange}
          />
          <Typography variant="body100">{isMuted ? 0 : volume}</Typography>
        </AudioPlayerVolumeSliderWrapper>
      }
      {...TooltipProps}
    >
      <AudioPlayerVolumeButton
        aria-label={isMuted || volume === 0 ? labelUnmute : labelMute}
        className={classes.volumeButton}
        size="32"
        onClick={onToggleMute}
      >
        {isMuted || volume === 0 ? iconVolumeOff : volume <= 50 ? iconVolumeLow : iconVolumeHigh}
      </AudioPlayerVolumeButton>
    </AudioPlayerVolumeRoot>
  );
};
