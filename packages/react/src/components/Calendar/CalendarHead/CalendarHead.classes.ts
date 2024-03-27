import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type CalendarHeadClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type CalendarHeadClassKey = keyof CalendarHeadClasses;

export function getCalendarHeadUtilityClass(slot: string): string {
  return generateUtilityClass('ESCalendarHead', slot);
}

export const calendarHeadClasses: CalendarHeadClasses = generateUtilityClasses('ESCalendarHead', ['root']);
