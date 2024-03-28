import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PaginationRangeClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the typography element. */
  label: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the typography element. */
  value: string;
};

export type PaginationRangeClassKey = keyof PaginationRangeClasses;

export function getPaginationRangeUtilityClass(slot: string): string {
  return generateUtilityClass('ESPaginationRange', slot);
}

export const paginationRangeClasses: PaginationRangeClasses = generateUtilityClasses('ESPaginationRange', [
  'root',
  'label',
  'button',
  'value'
]);
