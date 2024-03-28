import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FileInfoMetaClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type FileInfoMetaClassKey = keyof FileInfoMetaClasses;

export function getFileInfoMetaUtilityClass(slot: string): string {
  return generateUtilityClass('ESFileInfoMeta', slot);
}

export const fileInfoMetaClasses: FileInfoMetaClasses = generateUtilityClasses('ESFileInfoMeta', ['root']);
