import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer.types';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerVolumeProps extends Pick<AudioPlayerBaseProps, 'TooltipProps'> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Indicates whether the volume should be muted */
  isMuted: boolean;
  /** Current volume level of the audio */
  volume: number;

  /** Text for the mute button aria-label. */
  labelMute?: string;
  /** Text for the unmute button aria-label. */
  labelUnmute?: string;
  /** Text for the volume slider label. */
  labelVolume?: string;

  /** Icon for the high volume button. */
  iconVolumeHigh?: React.ReactNode;
  /** Icon for the low volume button. */
  iconVolumeLow?: React.ReactNode;
  /** Icon for the off volume button. */
  iconVolumeOff?: React.ReactNode;

  /** Callback fired when the volume changes */
  onChange: (_: unknown, value: number | number[]) => void;
  /** Callback fired when the mute/unmute button is toggled */
  onToggleMute: () => void;
}
