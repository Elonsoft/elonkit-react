import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type LinkClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant='inherit'. */
  inherit: string;
  /** Styles applied to the root element if underline='none'. */
  underlineNone: string;
  /** Styles applied to the root element if underline='hover'. */
  underlineHover: string;
  /** Styles applied to the root element if underline='always'. */
  underlineAlways: string;
  /** Styles applied to the root element if showVisited=true. */
  showVisited: string;
  /** Styles applied to the root element if it has startIcon. */
  startIcon: string;
  /** Styles applied to the root element if it has endIcon. */
  endIcon: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the children element. */
  children: string;
};
export type LinkClassKey = keyof LinkClasses;

export function getLinkUtilityClass(slot: string): string {
  return generateUtilityClass('ESLink', slot);
}

export const linkClasses: LinkClasses = generateUtilityClasses('ESLink', [
  'root',
  'inherit',
  'underlineNone',
  'underlineHover',
  'underlineAlways',
  'showVisited',
  'startIcon',
  'endIcon',
  'icon',
  'children'
]);
