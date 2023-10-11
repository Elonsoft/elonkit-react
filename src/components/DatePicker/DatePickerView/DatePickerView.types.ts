import { DatePickerViewClasses } from './DatePickerView.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DatePickerViewProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DatePickerViewClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
