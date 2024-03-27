import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AutocompleteMenuHeaderClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteMenuHeaderClassKey = keyof AutocompleteMenuHeaderClasses;

export function getAutocompleteMenuHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteMenuHeader', slot);
}

export const autocompleteMenuHeaderClasses: AutocompleteMenuHeaderClasses = generateUtilityClasses(
  'ESAutocompleteMenuHeader',
  ['root']
);
