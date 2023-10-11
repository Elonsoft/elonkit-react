import { DatePickerPresetsClasses } from './DatePickerPresets.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DatePickerPresetsProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DatePickerPresetsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  labelManual?: string;
  labelYesterday?: string;
  labelToday?: string;
  labelTomorrow?: string;
  labelPrevWeek?: string;
  labelWeek?: string;
  labelNextWeek?: string;
  labelPrevMonth?: string;
  labelMonth?: string;
  labelNextMonth?: string;
  labelYear?: string;
}
