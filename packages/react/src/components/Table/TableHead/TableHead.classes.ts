import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableHeadClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if it is sticky. */
  sticky: string;
  /** Styles applied to the root element if sticky is set and element is in stuck state. */
  stuck: string;
  /** Styles applied to the container element. */
  container: string;
};
export type TableHeadClassKey = keyof TableHeadClasses;

export function getTableHeadUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableHead', slot);
}

export const tableHeadClasses: TableHeadClasses = generateUtilityClasses('ESTableHead', [
  'root',
  'sticky',
  'stuck',
  'container'
]);
