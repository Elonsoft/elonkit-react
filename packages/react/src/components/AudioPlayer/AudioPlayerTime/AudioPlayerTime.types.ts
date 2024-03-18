import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer.types';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerTimeProps
  extends Pick<AudioPlayerBaseProps, 'reverse' | 'current' | 'isCurrentVisible' | 'duration'> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
