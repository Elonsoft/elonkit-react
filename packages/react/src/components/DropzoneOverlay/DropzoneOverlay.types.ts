import { ChangeEvent, ReactNode, Ref } from 'react';

import { DropzoneOverlayClasses } from './DropzoneOverlay.classes';

import { SxProps, Theme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export type DropzoneOverlayFileError = 'file-too-large' | 'file-invalid-type' | 'too-many-files';

export type DropzoneOverlayFileRejection = {
  file: File;
  errors: DropzoneOverlayFileError[];
};

export interface DropzoneOverlayProps {
  ref?: Ref<HTMLDivElement>;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DropzoneOverlayClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Heading text. */
  heading?: string;
  /** Subheading text. */
  subheading?: string;
  /** Icon to display with heading. */
  icon?: ReactNode;
  /** Allow multiple files. */
  multiple?: boolean;
  /** Accepted file types.
   * @default '*'
   */
  accept?: string;
  /** Maximum file size (in bytes). */
  maxSize?: number;
  /** Callback fired when files were accepted. */
  onChange?: (event: ChangeEvent<unknown>, files: File[]) => void;
  /** Callback fired when files were rejected. */
  onReject?: (event: ChangeEvent<unknown>, rejections: DropzoneOverlayFileRejection[]) => void;
  /** Props applied to the transition element. */
  TransitionProps?: TransitionProps;
}
