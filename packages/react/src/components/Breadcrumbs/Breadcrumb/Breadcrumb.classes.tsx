import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BreadcrumbClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the separator element. */
  separator: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};

export type BreadcrumbClassKey = keyof BreadcrumbClasses;

export function getBreadcrumbUtilityClass(slot: string): string {
  return generateUtilityClass('ESBreadcrumb', slot);
}

export const breadcrumbClasses: BreadcrumbClasses = generateUtilityClasses('ESBreadcrumb', [
  'root',
  'content',
  'separator',
  'tooltip'
]);
