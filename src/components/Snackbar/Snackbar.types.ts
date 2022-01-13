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
  /* The message to display. */
  message?: string;
  /** The icon to display. */
  icon?: ReactNode;
  /* Callback fired when the component request to be closed. */
  onClose?: () => void;
  /* The action to display. */
  action?: (options?: BaseSnackbarOptions) => ReactNode;
  /* The customSnackbar to display. */
  customSnackbar?: (options: BaseCustomSnackbarOption) => ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Snackbar stays on the screen, unless it is dismissed. */
  persist?: boolean;
}

export interface BaseSnackbarOptions {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The icon to display. */
  icon?: ReactNode;
  /** The number of milliseconds to wait before automatically calling the `onClose` callback. */
  autoHideDuration?: number;
  /** Snackbar stays on the screen, unless it is dismissed. */
  persist?: boolean;
  /** Ignores displaying multiple snackbars with the same `message`. */
  preventDuplicate?: boolean;
  /** Callback fired when the component request to be closed. */
  onClose?: () => void;
}

export interface SnackbarActionProps extends BaseSnackbarOptions {
  /** Callback used for getting action(s). */
  action?: (options: BaseSnackbarOptions) => ReactNode;
}

export interface BaseCustomSnackbarOption extends SnackbarActionProps {
  /* The message to display. */
  message: string;
}

export interface CustomSnackbarProps extends SnackbarActionProps {
  /* The customSnackbar to display. */
  customSnackbar?: (options: BaseCustomSnackbarOption) => ReactNode;
}
