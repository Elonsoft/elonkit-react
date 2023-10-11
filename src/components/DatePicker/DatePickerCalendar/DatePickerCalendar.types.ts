import { DatePickerCalendarClasses } from './DatePickerCalendar.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DatePickerCalendarProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DatePickerCalendarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  year: number;
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  selection?: [Date | string | number, Date | string | number | null] | null;
  onSelectionChange?: (value: [Date, Date | null]) => void;

  showWeekNumber?: boolean;
}
