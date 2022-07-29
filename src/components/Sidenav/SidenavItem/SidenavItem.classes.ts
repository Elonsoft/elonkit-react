import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidenavItemClasses = {
  /** Styles applied to the `IconButton` element. */
  iconButton: string;
};

export type SidenavItemClassKey = keyof SidenavItemClasses;

export function getSidenavItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidenavItem', slot);
}

export const sidenavItemClasses: SidenavItemClasses = generateUtilityClasses('ESSidenavItem', ['iconButton']);
