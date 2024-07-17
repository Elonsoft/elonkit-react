import { ReactNode } from 'react';

import { AuthCardClasses } from './AuthCard.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface AuthCardProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthCardClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
