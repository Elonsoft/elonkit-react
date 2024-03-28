import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PaginationPagesClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the pagination element. */
  pagination: string;
  /** Styles applied to the paginationItem element. */
  paginationItem: string;
  /** Styles applied to the next and prev button elements. */
  button: string;
  /** Styles applied to the pagination ellipsis. */
  ellipsis: string;
  /** Styles applied to the textField element. */
  textField: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};

export type PaginationPagesClassKey = keyof PaginationPagesClasses;

export function getPaginationPagesUtilityClass(slot: string): string {
  return generateUtilityClass('ESPaginationPages', slot);
}

export const paginationPagesClasses: PaginationPagesClasses = generateUtilityClasses('ESPaginationPages', [
  'root',
  'pagination',
  'paginationItem',
  'button',
  'ellipsis',
  'textField',
  'tooltip'
]);
