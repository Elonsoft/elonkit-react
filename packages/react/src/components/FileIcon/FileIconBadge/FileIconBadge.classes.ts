import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileIconBadgeClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if size='md'. */
  md: string;
  /** Styles applied to the root element if size='sm'. */
  sm: string;
};
export type FileIconBadgeClassKey = keyof FileIconBadgeClasses;

export function getFileIconBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileIconBadge', slot);
}

export const fileIconBadgeClasses: FileIconBadgeClasses = generateUtilityClasses('ESFileIconBadge', [
  'root',
  'md',
  'sm'
]);
