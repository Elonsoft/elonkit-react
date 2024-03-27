import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidebarSpacerClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SidebarSpacerClassKey = keyof SidebarSpacerClasses;

export function getSidebarSpacerUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarSpacer', slot);
}

export const sidebarSpacerClasses: SidebarSpacerClasses = generateUtilityClasses('ESSidebarSpacer', ['root']);
