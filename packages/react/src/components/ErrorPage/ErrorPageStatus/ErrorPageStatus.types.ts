import { ReactNode } from 'react';

import { ErrorPageStatusClasses } from './ErrorPageStatus.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface ErrorPageStatusProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ErrorPageStatusClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
