import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BreadcrumbsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the ul wrapper element. */
  list: string;
  /** Styles applied to the separator. */
  separator: string;
  /** Styles applied to the collapsed menu button. */
  collapsedMenuButton: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the root menu element. */
  menu: string;
};

export type BreadcrumbsClassKey = keyof BreadcrumbsClasses;

export function getBreadcrumbsUtilityClass(slot: string): string {
  return generateUtilityClass('ESBreadcrumbs', slot);
}

export const breadcrumbsClasses: BreadcrumbsClasses = generateUtilityClasses('ESBreadcrumbs', [
  'root',
  'list',
  'separator',
  'collapsedMenuButton',
  'button',
  'menu'
]);
