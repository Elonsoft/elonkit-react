import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DatePickerClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DatePickerClassKey = keyof DatePickerClasses;

export function getDatePickerUtilityClass(slot: string): string {
  return generateUtilityClass('ESDatePicker', slot);
}

export const datePickerClasses: DatePickerClasses = generateUtilityClasses('ESDatePicker', ['root']);
