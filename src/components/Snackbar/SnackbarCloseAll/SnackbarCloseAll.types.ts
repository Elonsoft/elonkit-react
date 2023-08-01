import { SnackbarCloseAllClasses } from './SnackbarCloseAll.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SnackbarCloseAllProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarCloseAllClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Text for the close all snackbar button. */
  labelCloseAll?: string;
  /* Callback fired when the component request to be closed. */
  onClose: () => void;
}
