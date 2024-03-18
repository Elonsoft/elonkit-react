import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer/AudioPlayer.types';

import { SxProps, Theme } from '@mui/material';

import { AudioPlayerClasses } from '../AudioPlayer';
import { AudioPlayerMenuProps } from '../AudioPlayer/AudioPlayerMenu';
import { AudioPlayerPlayButtonProps } from '../AudioPlayer/AudioPlayerPlayButton';
import { AudioPlayerProgressBarProps } from '../AudioPlayer/AudioPlayerProgressBar';
import { AudioPlayerTimeProps } from '../AudioPlayer/AudioPlayerTime';
import { AudioPlayerVolumeProps } from '../AudioPlayer/AudioPlayerVolume';

export interface AudioPanelProps
  extends Pick<
    AudioPlayerBaseProps,
    | 'TooltipProps'
    | 'src'
    | 'loop'
    | 'audioRef'
    | 'onAbort'
    | 'onCanPlay'
    | 'onCanPlayThrough'
    | 'onDurationChange'
    | 'onEmptied'
    | 'onEnded'
    | 'onError'
    | 'onLoadedData'
    | 'onLoadedMetadata'
    | 'onLoadStart'
    | 'onPause'
    | 'onPlay'
    | 'onPlaying'
    | 'onProgress'
    | 'onRateChange'
    | 'onSeeked'
    | 'onSeeking'
    | 'onStalled'
    | 'onSuspend'
    | 'onTimeUpdate'
    | 'onVolumeChange'
    | 'onWaiting'
    | 'onDownloadClick'
    | 'onClose'
    | 'reverse'
    | 'step'
  > {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  AudioPlayerVolumeProps?: Partial<AudioPlayerVolumeProps>;
  AudioPlayerPlayButtonProps?: Partial<AudioPlayerPlayButtonProps>;
  AudioPlayerProgressBarProps?: Partial<AudioPlayerProgressBarProps>;
  AudioPlayerMenuProps?: Partial<AudioPlayerMenuProps>;
  AudioPlayerTimeProps?: Partial<AudioPlayerTimeProps>;
}
