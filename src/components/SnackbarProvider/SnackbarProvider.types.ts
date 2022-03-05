import { ReactNode } from 'react';

import { SnackbarProviderClasses } from './SnackbarProvider.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SnackbarProviderProps {
  /** Number of snackbars. */
  maxSnack: number;
  /** Class applied to the root element. */
  classes?: Partial<SnackbarProviderClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Text for the close all snackbar button.  */
  labelCloseAll?: string;
}

export interface ISnackOptions {
  autoHideDuration?: number;
  timeout?: number;
  action?: (onClose?: () => void) => ReactNode;
  customSnackbar?: (onClose?: () => void, children?: ReactNode) => ReactNode;
}
