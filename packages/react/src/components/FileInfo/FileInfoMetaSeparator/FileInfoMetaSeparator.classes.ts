import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileInfoMetaSeparatorClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type FileInfoMetaSeparatorClassKey = keyof FileInfoMetaSeparatorClasses;

export function getFileInfoMetaSeparatorUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileInfoMetaSeparator', slot);
}

export const fileInfoMetaSeparatorClasses: FileInfoMetaSeparatorClasses = generateUtilityClasses(
  'ESFileInfoMetaSeparator',
  ['root']
);
