import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidebarToggleClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the horizontal divider element. */
  divider: string;
  /** Styles applied to the button element. */
  button: string;
};

export type SidebarToggleClassKey = keyof SidebarToggleClasses;

export function getSidebarToggleUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarToggle', slot);
}

export const sidebarToggleClasses: SidebarToggleClasses = generateUtilityClasses('ESSidebarToggle', [
  'root',
  'divider',
  'button'
]);
