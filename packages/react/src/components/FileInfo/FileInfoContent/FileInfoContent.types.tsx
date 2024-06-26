import { ReactNode } from 'react';

import { FileInfoContentClasses } from './FileInfoContent.classes';

import { SxProps, Theme } from '@mui/material';

export interface FileInfoContentProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoContentClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
