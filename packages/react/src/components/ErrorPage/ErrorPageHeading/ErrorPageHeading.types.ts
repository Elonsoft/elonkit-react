import { ReactNode } from 'react';

import { ErrorPageHeadingClasses } from './ErrorPageHeading.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface ErrorPageHeadingProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ErrorPageHeadingClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
