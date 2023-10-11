import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DatePickerViewClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DatePickerViewClassKey = keyof DatePickerViewClasses;

export function getDatePickerViewUtilityClass(slot: string): string {
  return generateUtilityClass('ESDatePickerView', slot);
}

export const datePickerViewClasses: DatePickerViewClasses = generateUtilityClasses('ESDatePickerView', ['root']);
