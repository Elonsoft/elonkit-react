import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidenavClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SidenavClassKey = keyof SidenavClasses;

export function getSidenavUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidenav', slot);
}

export const sidenavClasses: SidenavClasses = generateUtilityClasses('ESSidenav', ['root']);
