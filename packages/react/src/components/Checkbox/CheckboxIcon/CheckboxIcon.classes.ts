import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type CheckboxIconClasses = {
  /** Class name applied to the root element. */
  root: string;
};
export type CheckboxIconClassKey = keyof CheckboxIconClasses;

export function getCheckboxIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESCheckboxIcon', slot);
}

export const checkboxIconClasses: CheckboxIconClasses = generateUtilityClasses('ESCheckboxIcon', ['root']);
