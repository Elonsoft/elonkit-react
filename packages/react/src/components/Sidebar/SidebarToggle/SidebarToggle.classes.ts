import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidebarToggleClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the button tooltip element. */
  tooltip: string;
};

export type SidebarToggleClassKey = keyof SidebarToggleClasses;

export function getSidebarToggleUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarToggle', slot);
}

export const sidebarToggleClasses: SidebarToggleClasses = generateUtilityClasses('ESSidebarToggle', [
  'root',
  'button',
  'tooltip'
]);
