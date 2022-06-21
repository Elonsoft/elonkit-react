import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidebarItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the tooltip element. */
  itemTooltip: string;
  /** Styles applied to the menuItem element. */
  itemMenuItem: string;
};

export type SidebarItemClassKey = keyof SidebarItemClasses;

export function getSidebarItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarItem', slot);
}

export const sidebarItemClasses: SidebarItemClasses = generateUtilityClasses('ESSidebarItem', [
  'root',
  'itemTooltip',
  'itemMenuItem'
]);
