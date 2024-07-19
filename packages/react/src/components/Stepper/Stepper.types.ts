import { ReactNode } from 'react';

import { StepperClasses } from './Stepper.classes';

import { SxProps, Theme } from '@mui/material';

export interface StepperProps {
  className?: string;
  /** Override or extend the styles applied to the component. */
  children: ReactNode;
  classes?: Partial<StepperClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * Avatar size.
   * @default 32
   */
  size?: '24' | '32';
  /** Count the active step. */
  activeStep: number;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The component orientation.
   * @default 'default'
   */
  position?: 'default' | 'bottom';
}
