import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AutocompleteClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the menu element. */
  menu: string;
  /** Styles applied to the display value element. */
  displayValue: string;
  /** Styles applied to the input placeholder element. */
  inputPlaceholder: string;
};
export type AutocompleteClassKey = keyof AutocompleteClasses;

export function getAutocompleteUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocomplete', slot);
}

export const autocompleteClasses: AutocompleteClasses = generateUtilityClasses('ESAutocomplete', [
  'root',
  'input',
  'menu',
  'displayValue',
  'inputPlaceholder'
]);
