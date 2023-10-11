import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DatePickerPresetsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DatePickerPresetsClassKey = keyof DatePickerPresetsClasses;

export function getDatePickerPresetsUtilityClass(slot: string): string {
  return generateUtilityClass('ESDatePickerPresets', slot);
}

export const datePickerPresetsClasses: DatePickerPresetsClasses = generateUtilityClasses('ESDatePickerPresets', [
  'root'
]);
