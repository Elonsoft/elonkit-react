import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BreadcrumbsItemClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type BreadcrumbsItemClassKey = keyof BreadcrumbsItemClasses;

export function getBreadcrumbsItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESBreadcrumbsItem', slot);
}

export const breadcrumbsItemClasses: BreadcrumbsItemClasses = generateUtilityClasses('ESBreadcrumbsItem', ['root']);
