import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteFooterClassKey = keyof AutocompleteFooterClasses;

export function getAutocompleteFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteFooter', slot);
}

export const autocompleteFooterClasses: AutocompleteFooterClasses = generateUtilityClasses('ESAutocompleteFooter', [
  'root'
]);
