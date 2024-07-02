import { ReactNode } from 'react';

import { StepClasses } from './Step.classes';

import { SxProps, Theme } from '@mui/material';

export interface StepProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<StepClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * Avatar size.
   * @default 32
   */
  size?: '24' | '32';
  /** Styles applied to the track element. */
  completed?: boolean;
  /** Is the step complete */
  activeStep?: number;
  /**
   * If `true`, the component is error.
   */
  error?: boolean;

  stepIndex?: number;
  /** If true, the step is disabled. */
  disabled?: boolean;

  /**
   * The component position.
   * @default 'default'
   */
  position?: 'default' | 'bottom';
  /**
   * The component position.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}
