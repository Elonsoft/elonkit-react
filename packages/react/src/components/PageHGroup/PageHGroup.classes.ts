import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PageHGroupClassKey = keyof PageHGroupClasses;

export function getPageHGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroup', slot);
}

export const pageHGroupClasses: PageHGroupClasses = generateUtilityClasses('ESPageHGroup', ['root']);
