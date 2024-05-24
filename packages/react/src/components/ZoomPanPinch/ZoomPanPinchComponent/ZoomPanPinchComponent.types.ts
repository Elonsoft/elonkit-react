import { ZoomPanPinchComponentClasses } from './ZoomPanPinchComponent.classes';

import { SxProps, Theme } from '@mui/material';

export interface TransformComponentProps {
  children: React.ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<ZoomPanPinchComponentClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  wrapperStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
}
