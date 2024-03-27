import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type MenuItemClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type MenuItemClassKey = keyof MenuItemClasses;

export function getMenuItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESMenuItem', slot);
}

export const menuItemClasses: MenuItemClasses = generateUtilityClasses('ESMenuItem', ['root']);
