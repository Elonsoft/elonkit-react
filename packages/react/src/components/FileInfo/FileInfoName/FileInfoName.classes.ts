import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileInfoNameClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button?: string;
};

export type FileInfoNameClassKey = keyof FileInfoNameClasses;

export function getFileInfoNameUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileInfoName', slot);
}

export const fileInfoNameClasses: FileInfoNameClasses = generateUtilityClasses('ESFileInfoName', ['root', 'button']);
