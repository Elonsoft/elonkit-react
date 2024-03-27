import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PageHGroupActionsClassKey = keyof PageHGroupActionsClasses;

export function getPageHGroupActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupActions', slot);
}

export const pageHGroupActionsClasses: PageHGroupActionsClasses = generateUtilityClasses('ESPageHGroupActions', [
  'root'
]);
