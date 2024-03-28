import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupBreadcrumbsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PageHGroupBreadcrumbsClassKey = keyof PageHGroupBreadcrumbsClasses;

export function getPageHGroupBreadcrumbsUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupBreadcrumbs', slot);
}

export const pageHGroupBreadcrumbsClasses: PageHGroupBreadcrumbsClasses = generateUtilityClasses(
  'ESPageHGroupBreadcrumbs',
  ['root']
);
