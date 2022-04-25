import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteOptionClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteOptionClassKey = keyof AutocompleteOptionClasses;

export function getAutocompleteOptionUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteOption', slot);
}

export const autocompleteOptionClasses: AutocompleteOptionClasses = generateUtilityClasses('ESAutocompleteOption', [
  'root'
]);
