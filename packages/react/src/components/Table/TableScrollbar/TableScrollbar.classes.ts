import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableScrollbarClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type TableScrollbarClassKey = keyof TableScrollbarClasses;

export function getTableScrollbarUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableScrollbar', slot);
}

export const tableScrollbarClasses: TableScrollbarClasses = generateUtilityClasses('ESTableScrollbar', ['root']);
