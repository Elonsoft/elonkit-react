import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSSortingClasses = {
  /** Styled applied to the root element. */
  root: string;
  /** Styles applied to the menu open button. */
  menuButton: string;
  /** Styles applied to the menu open button badge. */
  menuButtonBadge: string;
  /** Styles applied to the root menu element. */
  menu: string;
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

export type SFSSortingClassKey = keyof SFSSortingClasses;

export function getSFSSortingUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSorting', slot);
}

export const sfsSortingClasses: SFSSortingClasses = generateUtilityClasses('ESSFSSorting', [
  'root',
  'menuButton',
  'menuButtonBadge',
  'menu',
  'menuItem',
  'menuHeader',
  'menuFooter',
  'resetButton',
  'directionButton',
  'directionButtonBadge',
  'plusSign',
  'caption'
]);
