import { LinearProgressClasses } from './LinearProgress.classes';

import { SxProps, Theme } from '@mui/material';

export interface LinearProgressProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LinearProgressClasses>;

  /** Class applied to the root element. */
  className?: string;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value?: number;

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer?: number;

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer';

  /**
   * The width of the progress line.
   * @default 4
   */
  width?: number;
}
