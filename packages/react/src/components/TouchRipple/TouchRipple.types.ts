import { TouchRippleClasses } from './TouchRipple.classes';

import { SxProps, Theme } from '@mui/material';

export interface TouchRippleProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TouchRippleClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}

export interface TouchRippleParams {
  /** If true, the ripple starts from the center. */
  center?: boolean;
  /** If true, the ripple is disabled. */
  disabled?: boolean;

  /** The duration for the ripple animation, in milliseconds. */
  pressGrowDuration?: number;
  /** The minimum duration for the ripple animation, in milliseconds. */
  minimumPressDuration?: number;

  onClick?: React.MouseEventHandler<HTMLElement>;
  onContextMenu?: React.MouseEventHandler<HTMLElement>;
  onPointerCancel?: React.PointerEventHandler<HTMLElement>;
  onPointerDown?: React.PointerEventHandler<HTMLElement>;
  onPointerUp?: React.PointerEventHandler<HTMLElement>;
  onPointerLeave?: React.PointerEventHandler<HTMLElement>;
}
