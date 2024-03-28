import { ReactNode } from 'react';

import { AvatarClasses } from './Avatar.classes';

import { SxProps, Theme } from '@mui/material';

export interface AvatarProps {
  /** Used to render icon or text elements inside the `Avatar` if `src` is not set.  */
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AvatarClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** Determines border variant of avatar.
   * @default square
   */
  variant?: 'circle' | 'square';
  /** Avatar size.
   * @default 40
   */
  size?: number;
  /** The `src` attribute for the `img` element. */
  src?: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;
}
