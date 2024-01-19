import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ToggleButtonGroupClasses = {
  /** Styled applied to the root element. */
  root: string;
  horizontal: string;
  vertical: string;
};

export type ToggleButtonGroupClassKey = keyof ToggleButtonGroupClasses;

export function getToggleButtonGroupUtilityClass(slot: string) {
  return generateUtilityClass('ESToggleButtonGroup', slot);
}

export const toggleButtonGroupClasses: ToggleButtonGroupClasses = generateUtilityClasses('ESToggleButtonGroup', [
  'root',
  'horizontal',
  'vertical',
]);
