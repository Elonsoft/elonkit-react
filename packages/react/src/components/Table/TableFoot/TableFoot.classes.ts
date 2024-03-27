import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableFootClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if it is sticky. */
  sticky: string;
  /** Styles applied to the root element if sticky is set and element is in stuck state. */
  stuck: string;
};
export type TableFootClassKey = keyof TableFootClasses;

export function getTableFootUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableFoot', slot);
}

export const tableFootClasses: TableFootClasses = generateUtilityClasses('ESTableFoot', ['root', 'sticky', 'stuck']);
