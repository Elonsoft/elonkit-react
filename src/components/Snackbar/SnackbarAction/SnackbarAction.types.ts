import { ReactNode } from 'react';

import { BaseSnackbarOptions } from '../Snackbar.types';

import { SnackbarActionClasses } from './SnackbarAction.classes';

import { SxProps, Theme } from '@mui/material';

export interface SnackbarActionProps extends BaseSnackbarOptions {
  children: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarActionClasses>;
  /** Class applied to the root element. */
  className?: string;
  /* The number of milliseconds wait before calling the onClose function. */
  autoHideDuration?: number;
  /** Snackbar stays on the screen, unless it is dismissed. */
  persist?: boolean;
  /* Callback fired when the component request to be closed. */
  onClick: () => void;
}
