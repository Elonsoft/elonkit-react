import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileInfoContentClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type FileInfoContentClassKey = keyof FileInfoContentClasses;

export function getFileInfoContentUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileInfoContent', slot);
}

export const fileInfoContentClasses: FileInfoContentClasses = generateUtilityClasses('ESFileInfoContent', ['root']);
