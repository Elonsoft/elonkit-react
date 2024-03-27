import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableRowClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if hover="true". */
  hover: string;
  /** Styles applied to the root element if selected="true". */
  selected: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the overlap element. */
  overlap: string;
};
export type TableRowClassKey = keyof TableRowClasses;

export function getTableRowUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableRow', slot);
}

export const tableRowClasses: TableRowClasses = generateUtilityClasses('ESTableRow', [
  'root',
  'hover',
  'selected',
  'content',
  'overlap'
]);
