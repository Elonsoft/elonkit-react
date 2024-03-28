import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AutocompleteMenuFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteMenuFooterClassKey = keyof AutocompleteMenuFooterClasses;

export function getAutocompleteMenuFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteMenuFooter', slot);
}

export const autocompleteMenuFooterClasses: AutocompleteMenuFooterClasses = generateUtilityClasses(
  'ESAutocompleteMenuFooter',
  ['root']
);
