import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TableBodyClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if striped="true". */
  striped: string;
};
export type TableBodyClassKey = keyof TableBodyClasses;

export function getTableBodyUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableBody', slot);
}

export const tableBodyClasses: TableBodyClasses = generateUtilityClasses('ESTableBody', ['root', 'striped']);
