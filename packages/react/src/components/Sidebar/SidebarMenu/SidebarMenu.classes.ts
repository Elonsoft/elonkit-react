import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidebarMenuClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SidebarMenuClassKey = keyof SidebarMenuClasses;

export function getSidebarMenuUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarMenu', slot);
}

export const sidebarMenuClasses: SidebarMenuClasses = generateUtilityClasses('ESSidebarMenu', ['root']);
