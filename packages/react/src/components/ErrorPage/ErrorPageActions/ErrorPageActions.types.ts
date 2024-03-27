import { ReactNode } from 'react';

import { ErrorPageActionsClasses } from './ErrorPageActions.classes';

import { SxProps, Theme } from '@mui/material';

export interface ErrorPageActionsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ErrorPageActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
