import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteSearchClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteSearchClassKey = keyof AutocompleteSearchClasses;

export function getAutocompleteSearchUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteSearch', slot);
}

export const autocompleteSearchClasses: AutocompleteSearchClasses = generateUtilityClasses('ESAutocompleteSearch', [
  'root'
]);
