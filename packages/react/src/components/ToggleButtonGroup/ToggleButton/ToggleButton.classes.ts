import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ToggleButtonClasses = {
  /** Styled applied to the root element. */
  root: string;
};

export type ToggleButtonClassKey = keyof ToggleButtonClasses;

export function getToggleButtonUtilityClass(slot: string) {
  return generateUtilityClass('ESToggleButton', slot);
}

export const toggleButtonClasses: ToggleButtonClasses = generateUtilityClasses('ESToggleButton', ['root']);
