import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DatePickerCalendarClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DatePickerCalendarClassKey = keyof DatePickerCalendarClasses;

export function getDatePickerCalendarUtilityClass(slot: string): string {
  return generateUtilityClass('ESDatePickerCalendar', slot);
}

export const datePickerCalendarClasses: DatePickerCalendarClasses = generateUtilityClasses('ESDatePickerCalendar', [
  'root'
]);
