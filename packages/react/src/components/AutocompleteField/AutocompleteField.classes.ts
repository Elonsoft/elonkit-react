import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AutocompleteFieldClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteFieldClassKey = keyof AutocompleteFieldClasses;

export function getAutocompleteFieldUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteField', slot);
}

export const autocompleteFieldClasses: AutocompleteFieldClasses = generateUtilityClasses('ESAutocompleteField', [
  'root'
]);
