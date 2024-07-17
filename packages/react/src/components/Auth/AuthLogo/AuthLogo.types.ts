import { ReactNode } from 'react';

import { AuthLogoClasses } from './AuthLogo.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface AuthLogoProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthLogoClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
