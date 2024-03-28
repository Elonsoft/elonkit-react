import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileIconClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the children wrapper element. */
  children: string;
  /** Styles applied to the icon element. */
  icon: string;
};
export type FileIconClassKey = keyof FileIconClasses;

export function getFileIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileIcon', slot);
}

export const fileIconClasses: FileIconClasses = generateUtilityClasses('ESFileIcon', ['root', 'children', 'icon']);
