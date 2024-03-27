import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SidebarItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
  /** Styles applied to the tooltip item element. */
  tooltipItem: string;
  /** Styles applied to the tooltip title. */
  tooltipTitle: string;
  /** Styles applied to the tooltip divider. */
  tooltipDivider: string;
  /** Styles applied to the item text element. */
  text: string;
  /** Styles applied to the item icon element. */
  icon: string;
  /** Styles applied to the item nested menu element. */
  nestedMenu: string;
  /** Styles applied to the item container element. */
  container: string;
  /** Styles applied to the item secondary action. */
  secondaryAction: string;
};

export type SidebarItemClassKey = keyof SidebarItemClasses;

export function getSidebarItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebarItem', slot);
}

export const sidebarItemClasses: SidebarItemClasses = generateUtilityClasses('ESSidebarItem', [
  'root',
  'wrapper',
  'button',
  'tooltip',
  'tooltipItem',
  'tooltipTitle',
  'tooltipDivider',
  'menuItem',
  'text',
  'icon',
  'nestedMenu',
  'container',
  'secondaryAction'
]);
