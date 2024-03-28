import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BreadcrumbsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the list element. */
  list: string;
  /** Styles applied to the button element. */
  buttonMore: string;
  /** Styles applied to the menu  element. */
  menu: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};

export type BreadcrumbsClassKey = keyof BreadcrumbsClasses;

export function getBreadcrumbsUtilityClass(slot: string): string {
  return generateUtilityClass('ESBreadcrumbs', slot);
}

export const breadcrumbsClasses: BreadcrumbsClasses = generateUtilityClasses('ESBreadcrumbs', [
  'root',
  'list',
  'buttonMore',
  'menu',
  'menuItem',
  'tooltip'
]);
