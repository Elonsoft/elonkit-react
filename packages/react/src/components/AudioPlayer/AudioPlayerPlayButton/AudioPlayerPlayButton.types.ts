import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer.types';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerPlayButtonProps extends Pick<AudioPlayerBaseProps, 'isPlaying'> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Icon for the skip back button. */
  iconPrev?: React.ReactNode;
  /** Icon for the pause button. */
  iconPause?: React.ReactNode;
  /** Icon for the play button. */
  iconPlay?: React.ReactNode;
  /** Icon for the skip forward button. */
  iconNext?: React.ReactNode;

  /** Text for the pause button aria-label. */
  labelPause?: string;
  /** Text for the play button aria-label. */
  labelPlay?: string;
  /** Text for the skip back button aria-label. */
  labelPrev?: string;
  /** Text for the skip forward button aria-label. */
  labeNext?: string;

  /** Callback fired when the play button has been clicked. */
  onTogglePlay: () => void;
  /** Callback fired when the skip back button has been clicked. */
  onPrev?: () => void;
  /** Callback fired when the skip forward button has been clicked. */
  onNext?: () => void;
}
