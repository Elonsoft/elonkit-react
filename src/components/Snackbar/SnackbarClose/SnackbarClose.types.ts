import { BaseSnackbarOptions } from '../Snackbar.types';

import { SnackbarCloseClasses } from './SnackbarClose.classes';

export interface SnackbarCloseProps extends BaseSnackbarOptions {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarCloseClasses>;
  /** Class applied to the root element. */
  className?: string;
  /* Callback fired when the component request to be closed. */
  onClick: () => void;
}
