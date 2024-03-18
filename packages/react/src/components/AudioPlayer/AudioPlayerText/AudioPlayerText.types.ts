import { ReactNode } from 'react';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerTextProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Main text content to display */
  text: string;
  /** Caption text content to display */
  caption?: string;
}
