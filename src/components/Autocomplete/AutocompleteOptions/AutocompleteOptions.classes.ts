import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteOptionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteOptionsClassKey = keyof AutocompleteOptionsClasses;

export function getAutocompleteOptionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteOptions', slot);
}

export const autocompleteOptionsClasses: AutocompleteOptionsClasses = generateUtilityClasses('ESAutocompleteOptions', [
  'root'
]);
