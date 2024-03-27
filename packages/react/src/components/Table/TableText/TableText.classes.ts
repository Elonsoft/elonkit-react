import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableTextClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};
export type TableTextClassKey = keyof TableTextClasses;

export function getTableTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableText', slot);
}

export const tableTextClasses: TableTextClasses = generateUtilityClasses('ESTableText', ['root', 'tooltip']);
