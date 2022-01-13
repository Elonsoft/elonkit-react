import { ReactNode } from 'react';

import { SnackbarProps } from './Snackbar.types';

import { SnackbarProviderClasses } from './SnackbarProvider.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SnackbarProviderProps {
  children: ReactNode;
  /** Class applied to the root element. */
  classes?: Partial<SnackbarProviderClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Number of snackbars. */
  maxSnack: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
  /** The anchor of the snackbar. */
  anchorOrigin?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}

export interface Snack extends SnackbarProps {
  message?: string;
  id: number;
  checked?: boolean;
  preventDuplicate?: boolean;
}

export interface SnackbarPayload extends Snack {
  maxSnack?: number;
}

export interface SnackbarState {
  snacks: Snack[];
  queue: Snack[];
}
