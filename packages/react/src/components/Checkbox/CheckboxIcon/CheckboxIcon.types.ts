import { ReactNode } from 'react';

import { CheckboxIconClasses } from './CheckboxIcon.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface CheckboxIconProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<CheckboxIconClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
