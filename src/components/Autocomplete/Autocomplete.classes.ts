import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteClassKey = keyof AutocompleteClasses;

export function getAutocompleteUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocomplete', slot);
}

export const autocompleteClasses: AutocompleteClasses = generateUtilityClasses('ESAutocomplete', ['root']);
