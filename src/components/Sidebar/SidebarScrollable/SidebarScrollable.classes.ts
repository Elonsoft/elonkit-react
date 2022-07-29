import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidebarScrollableClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SidebarScrollableClassKey = keyof SidebarScrollableClasses;

export function getSidebarScrollableUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarScrollable', slot);
}

export const sidebarScrollableClasses: SidebarScrollableClasses = generateUtilityClasses('ESSidebarScrollable', [
  'root'
]);
