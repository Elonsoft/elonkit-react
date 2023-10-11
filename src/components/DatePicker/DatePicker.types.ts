import { ReactNode } from 'react';

import { DatePickerClasses } from './DatePicker.classes';

import { SxProps, Theme } from '@mui/material/styles';

import { DatePickerContextValue } from './DatePicker.context';

export interface DatePickerProps {
  children?: (value: DatePickerContextValue) => ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<DatePickerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /* */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /* */
  multiple?: boolean;
  /* */
  range?: boolean;
}
