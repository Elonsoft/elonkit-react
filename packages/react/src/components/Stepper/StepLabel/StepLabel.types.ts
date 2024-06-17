import { ReactNode } from 'react';

import { StepLabelClasses } from './StepLabel.classes';

import { SxProps, Theme } from '@mui/material';

export interface StepLabelProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<StepLabelClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
