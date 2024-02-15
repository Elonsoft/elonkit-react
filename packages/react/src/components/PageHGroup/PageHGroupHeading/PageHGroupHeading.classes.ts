import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type PageHGroupHeadingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};
export type PageHGroupHeadingClassKey = keyof PageHGroupHeadingClasses;

export function getPageHGroupHeadingUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupHeading', slot);
}

export const pageHGroupHeadingClasses: PageHGroupHeadingClasses = generateUtilityClasses('ESPageHGroupHeading', [
  'root',
  'tooltip'
]);
