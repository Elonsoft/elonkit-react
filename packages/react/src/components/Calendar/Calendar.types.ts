import { CalendarClasses } from './Calendar.classes';

import { SxProps, Theme } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';

export interface CalendarProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<CalendarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The year to display. */
  year: number;
  /** The month to display. */
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** The day the week starts with. */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Count of calendar rows to display.
   * @default 'max'
   */
  rows?: 'auto' | 'max';

  /** The current selected date range. */
  selection?: [Date | string | number, Date | string | number | null] | null;
  /** Callback fired when the date is selected. */
  onSelectionChange?: (value: Date) => void;

  /** The current hovered date. */
  hover?: [Date, Date] | null;
  /** Callback fired when the date button is hovered or focused. */
  onHover?: (date: Date | null) => void;

  /** Whether to display dates of the previous month at the start the current month. */
  showPrevMonth?: boolean;
  /** Whether to display dates of the next month at the end of the current month. */
  showNextMonth?: boolean;

  /** Used to determine the disabled state for a given date. */
  getButtonDisabled?: (date: Date) => boolean;
  /** Used to determine the props applied to the tooltip element of a given date . */
  getButtonTooltipProps?: (date: Date) => Partial<TooltipProps>;
}
