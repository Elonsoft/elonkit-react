import { DatePickerFooterClasses } from './DatePickerFooter.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DatePickerFooterProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DatePickerFooterClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
