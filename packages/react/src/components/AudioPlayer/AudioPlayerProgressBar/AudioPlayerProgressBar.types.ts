import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer.types';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerProgressBarProps
  extends Pick<AudioPlayerBaseProps, 'reverse' | 'step' | 'current' | 'isCurrentVisible' | 'isPlaying' | 'duration'> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Indicates whether the user is currently changing the playback time */
  isChanging?: boolean;
  /** Current playback time when the user is changing the time manually*/
  currentChanging: number;
  /** Hover state indicating the current position of the mouse on the progress bar */
  hover: number;
  /** Styles variant of progress bar */
  variant?: 'default' | 'panel';

  /** Callback fired when the user interacts with the progress bar*/
  setHover: React.Dispatch<React.SetStateAction<number>>;
  /** Callback fired when the user commits a change in playback time */
  onTimeChangeCommitted: (event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void;
  /** Callback fired when the playback time changes */
  onTimeChange: (event: Event, value: number | number[]) => void;

  /** Text for the current playback time slider label. */
  labelCurrent?: string;
}
