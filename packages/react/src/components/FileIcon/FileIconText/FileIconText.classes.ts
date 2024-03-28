import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileIconTextClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FileIconTextClassKey = keyof FileIconTextClasses;

export function getFileIconTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileIconText', slot);
}

export const fileIconTextClasses: FileIconTextClasses = generateUtilityClasses('ESFileIconText', ['root']);
