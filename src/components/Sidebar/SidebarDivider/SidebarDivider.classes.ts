import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidebarDividerClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SidebarDividerClassKey = keyof SidebarDividerClasses;

export function getSidebarDividerUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarDivider', slot);
}

export const sidebarDividerClasses: SidebarDividerClasses = generateUtilityClasses('ESSidebarDivider', ['root']);
