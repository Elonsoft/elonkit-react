import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DatePickerFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DatePickerFooterClassKey = keyof DatePickerFooterClasses;

export function getDatePickerFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESDatePickerFooter', slot);
}

export const datePickerFooterClasses: DatePickerFooterClasses = generateUtilityClasses('ESDatePickerFooter', ['root']);
