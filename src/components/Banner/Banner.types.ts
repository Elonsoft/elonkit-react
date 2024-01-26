import { ReactNode } from 'react';

import { BannerClasses } from './Banner.classes';

import { Breakpoint, SxProps, Theme } from '@mui/material/styles';

export interface BannerProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BannerClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The icon displayed before the message. */
  icon?: ReactNode;

  /**
   * The variant to use.
   * @default 'colored'
   */
  variant?: 'colored' | 'monoB';

  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: 'success' | 'warning' | 'error' | 'info';

  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   */
  color?: 'success' | 'warning' | 'error' | 'info' | 'monoA' | 'primary' | 'secondary';

  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  breakpoint?: number | Breakpoint;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: ReactNode;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  actions?: ReactNode;

  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<'info' | 'success' | 'error' | 'warning', ReactNode>;
}
