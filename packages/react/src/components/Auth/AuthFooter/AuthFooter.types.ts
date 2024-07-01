import { ReactNode } from 'react';

import { AuthFooterClasses } from './AuthFooter.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface AuthFooterProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthFooterClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
