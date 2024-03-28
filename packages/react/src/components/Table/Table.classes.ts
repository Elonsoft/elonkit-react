import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type TableClassKey = keyof TableClasses;

export function getTableUtilityClass(slot: string): string {
  return generateUtilityClass('ESTable', slot);
}

export const tableClasses: TableClasses = generateUtilityClasses('ESTable', ['root']);
