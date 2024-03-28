import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type CalendarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if rows="auto". */
  rowsAuto: string;
  /** Styles applied to the root element if rows="max". */
  rowsMax: string;
};
export type CalendarClassKey = keyof CalendarClasses;

export function getCalendarUtilityClass(slot: string): string {
  return generateUtilityClass('ESCalendar', slot);
}

export const calendarClasses: CalendarClasses = generateUtilityClasses('ESCalendar', ['root', 'rowsAuto', 'rowsMax']);
