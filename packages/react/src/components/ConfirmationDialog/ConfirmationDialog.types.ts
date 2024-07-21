import { ReactNode } from 'react';

import { ConfirmationDialogClasses } from './ConfirmationDialog.classes';

import { DialogProps } from '../Dialog';

export interface ConfirmationDialogProps extends DialogProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ConfirmationDialogClasses>;
  /** Confirmation dialog children, usually the included sub-components. */
  children?: React.ReactNode;
  /** The icon displayed before the title. */
  icon?: ReactNode;
  /** The icon for closing the modal. */
  iconClose?: ReactNode;
  /**
   * The severity of the confirmation dialog. This defines the color and icon used.
   * @default 'primary'
   */
  severity?: 'error' | 'primary';
  /** The title text. */
  title: ReactNode;
  /** Text for the confirm buttony. */
  labelConfirm?: ReactNode;
  /** Text for the cancel buttony. */
  labelCancel?: ReactNode;
  /** If true, the button is disabled. */
  disabled?: boolean;
  /**
   * Callback fired when the user clicks the button.
   */
  action: () => Promise<any>;
  /**
   * Callback fired when the component requests to be closed.
   */
  close: (data?: any) => void;
  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<'error' | 'primary', ReactNode>;
}
