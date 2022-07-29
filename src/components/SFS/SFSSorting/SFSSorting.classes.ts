import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSSortingClasses = {
  /** Styled applied to the root element. */
  root: string;
  /** Styles applied to the button which open sorting menu element. */
  openSortMenuButton: string;
  /** Styles applied to the menu element. */
  menu: string;
  /** Styles applied to the menu wrapper element. */
  menuWrapper: string;
  /** Styles applied to the menu item title element. */
  menuItemTooltip: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the menu list. */
  menuList: string;
  /** Styles applied to the bottom menu tooltip element. */
  menuTooltip: string;
  /** Styles applied to the bottom menu tooltip element on PC. */
  menuTooltipPC: string;
  /** Styles applied to the bottom menu tooltip element on Mobile. */
  menuTooltipMobile: string;
  /** Styles applied to the reset sort button. */
  resetSortButton: string;
  /** Styles applied to the direction badge element. */
  directionBadge: string;
  /** Styles applied to the change direction button inside MenuItem. */
  changeSortDirectionButton: string;
};

export type SFSSortingClassKey = keyof SFSSortingClasses;

export function getSFSSortingUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSorting', slot);
}

export const sfsSortingClasses: SFSSortingClasses = generateUtilityClasses('ESSFSSorting', [
  'root',
  'openSortMenuButton',
  'menu',
  'menuWrapper',
  'menuItemTooltip',
  'menuItem',
  'menuList',
  'menuTooltip',
  'menuTooltipPC',
  'menuTooltipMobile',
  'resetSortButton',
  'directionBadge',
  'changeSortDirectionButton'
]);
