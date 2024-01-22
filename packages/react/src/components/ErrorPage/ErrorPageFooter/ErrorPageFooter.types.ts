import { ReactNode } from 'react';

import { ErrorPageFooterClasses } from './ErrorPageFooter.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface ErrorPageFooterProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ErrorPageFooterClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
