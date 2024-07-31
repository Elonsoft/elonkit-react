import { ReactNode } from 'react';

import { KbdClasses } from './Kbd.classes';

import { SxProps, Theme } from '@mui/material';

export interface KbdProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<KbdClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Variant of the component.
   * @default 'raised'
   */
  variant?: 'raised' | 'contained' | 'outlined' | 'primary' | 'secondary';
}
