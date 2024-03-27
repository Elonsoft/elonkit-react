import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidenavClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the container. */
  container: string;
  /** Styles applied to the rail. */
  rail: string;
  /** Styles applied to the drawer. */
  drawer: string;
  /** Styles applied to the overlay. */
  overlay: string;
};

export type SidenavClassKey = keyof SidenavClasses;

export function getSidenavUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidenav', slot);
}

export const sidenavClasses: SidenavClasses = generateUtilityClasses('ESSidenav', [
  'root',
  'container',
  'rail',
  'drawer',
  'overlay'
]);
