import { AudioPlayerTimeProps } from './AudioPlayerTime.types';

import clsx from 'clsx';
import { getAudioPlayerTimeUtilityClass } from './AudioPlayerTime.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';

type AudioPlayerTimeOwnerState = {
  classes?: AudioPlayerTimeProps['classes'];
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerTimeOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAudioPlayerTimeUtilityClass, classes);
};

const AudioPlayerTimeRoot = styled(Typography, {
  name: 'ESAudioPlayerTime',
  slot: 'Time',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.palette.monoA.A800,
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap'
})) as typeof Typography;

const getTimeValue = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const AudioPlayerTimeValue = ({ time }: { time: number }) => {
  return <>{getTimeValue(time)}</>;
};

/**
 * The AudioPlayerTime displays information and actions relating to the current screen.
 */
export const AudioPlayerTime = (inProps: AudioPlayerTimeProps) => {
  const { className, isCurrentVisible, reverse, duration, current, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerTime'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerTimeRoot className={clsx(classes.root, className)} variant="caption">
      <AudioPlayerTimeValue time={isCurrentVisible ? (reverse ? duration - current : current) : duration} />
    </AudioPlayerTimeRoot>
  );
};
