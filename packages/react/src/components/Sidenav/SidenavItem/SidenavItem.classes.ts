import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidenavItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the tooltip. */
  tooltip: string;
};

export type SidenavItemClassKey = keyof SidenavItemClasses;

export function getSidenavItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidenavItem', slot);
}

export const sidenavItemClasses: SidenavItemClasses = generateUtilityClasses('ESSidenavItem', ['root', 'tooltip']);
