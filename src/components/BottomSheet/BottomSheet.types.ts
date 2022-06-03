import { BottomSheetClasses } from './BottomSheet.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';

export interface BottomSheetProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BottomSheetClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Bottom sheet children, usually the included sub-components. */
  children?: React.ReactNode;
  /** The id(s) of the element(s) that describe the dialog. */
  'aria-describedby'?: string;
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby'?: string;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * @default '100%'
   */
  maxWidth?: string;
  /**
   * Dialog vertical alignment.
   * @default 'flex-end'
   */
  align?: 'flex-end' | 'stretch';
  /** Callback fired when the backdrop is clicked. */
  onBackdropClick?: ModalProps['onBackdropClick'];
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: ModalProps['onClose'];
  /**
   * If `true`, the component is shown.
   */
  open: ModalProps['open'];
  /** The component used for the transition. */
  TransitionComponent?: React.JSXElementConstructor<TransitionProps & { children: React.ReactElement<any, any> }>;
  /** Props applied to the transition element. */
  TransitionProps?: TransitionProps;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  transitionDuration?: TransitionProps['timeout'];

  /** Whether the sheet should collapse when higher than screen. */
  collapse?: boolean;
  /**
   * The min screen height required for the sheet to be able to collapse.
   * @default 480
   */
  collapseScreenHeight?: number;
}
