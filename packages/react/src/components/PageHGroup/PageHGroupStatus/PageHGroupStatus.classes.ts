import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupStatusClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PageHGroupStatusClassKey = keyof PageHGroupStatusClasses;

export function getPageHGroupStatusUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupStatus', slot);
}

export const pageHGroupStatusClasses: PageHGroupStatusClasses = generateUtilityClasses('ESPageHGroupStatus', ['root']);
