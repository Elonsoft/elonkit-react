import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileInfoClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FileInfoClassKey = keyof FileInfoClasses;

export function getFileInfoUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileInfo', slot);
}

export const fileInfoClasses: FileInfoClasses = generateUtilityClasses('ESFileInfo', ['root']);
