import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupMainClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PageHGroupMainClassKey = keyof PageHGroupMainClasses;

export function getPageHGroupMainUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupMain', slot);
}

export const pageHGroupMainClasses: PageHGroupMainClasses = generateUtilityClasses('ESPageHGroupMain', ['root']);
