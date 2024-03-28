import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AutocompleteMenuClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the paper element. */
  paper: string;
  /** Styles applied to the menu list element. */
  menuList: string;
  /** Styles applied to the menu group element. */
  menuGroup: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the menu item text element. */
  menuItemText: string;
  /** Styles applied to the sentinel element. */
  sentinel: string;
  /** Styles applied to the empty state element. */
  emptyState: string;
  /** Styles applied to the search field element. */
  search: string;
};
export type AutocompleteMenuClassKey = keyof AutocompleteMenuClasses;

export function getAutocompleteMenuUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteMenu', slot);
}

export const autocompleteMenuClasses: AutocompleteMenuClasses = generateUtilityClasses('ESAutocompleteMenu', [
  'root',
  'paper',
  'menuList',
  'menuGroup',
  'menuItem',
  'menuItemText',
  'sentinel',
  'emptyState',
  'search'
]);
