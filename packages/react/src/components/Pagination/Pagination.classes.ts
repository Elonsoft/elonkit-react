import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PaginationClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type PaginationClassKey = keyof PaginationClasses;

export function getPaginationUtilityClass(slot: string): string {
  return generateUtilityClass('ESPagination', slot);
}

export const paginationClasses: PaginationClasses = generateUtilityClasses('ESPagination', ['root']);
