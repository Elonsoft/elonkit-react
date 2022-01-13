import { ReactNode } from 'react';

import { SnackbarClasses } from './Snackbar.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SnackbarProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /* The number of milliseconds wait before calling the onClose function. */
  autoHideDuration?: number;
  /* Callback fired when the component request to be closed. */
  onClose?: () => void;
  /* The action to display. */
  action?: (onClose?: () => void) => ReactNode;
  /* The customSnackbar to display. */
  customSnackbar?: (onClose?: () => void, message?: ReactNode) => ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /*The icon to display.*/
  icon?: ReactNode;
  /*The message to display.*/
  message?: string;
}
