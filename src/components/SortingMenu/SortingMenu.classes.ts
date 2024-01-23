import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SortingMenuClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the menu header element. */
  menuHeader: string;
  /** Styles applied to the menu footer element. */
  menuFooter: string;
  /** Styles applied to the reset button. */
  resetButton: string;
  /** Styles applied to the direction button. */
  directionButton: string;
  /** Styles applied to the direction button badge. */
  directionButtonBadge: string;
  /** Styles applied to the plus sign element. */
  plusSign: string;
  /** Styles applied to the caption elements. */
  caption: string;
};

export type SortingMenuClassKey = keyof SortingMenuClasses;

export function getSortingMenuUtilityClass(slot: string): string {
  return generateUtilityClass('ESSortingMenu', slot);
}

export const sortingMenuClasses: SortingMenuClasses = generateUtilityClasses('ESSortingMenu', [
  'root',
  'menuItem',
  'menuHeader',
  'menuFooter',
  'resetButton',
  'directionButton',
  'directionButtonBadge',
  'plusSign',
  'caption'
]);
