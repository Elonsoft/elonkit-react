import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type EmptyStateCompactClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type EmptyStateCompactClassKey = keyof EmptyStateCompactClasses;

export function getEmptyStateUtilityClass(slot: string): string {
  return generateUtilityClass('ESEmptyStateCompact', slot);
}

export const emptyStateCompactClasses: EmptyStateCompactClasses = generateUtilityClasses('ESEmptyStateCompact', [
  'root'
]);
