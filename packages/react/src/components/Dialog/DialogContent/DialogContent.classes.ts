import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogContentClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DialogContentClassKey = keyof DialogContentClasses;

export function getDialogContentUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogContent', slot);
}

export const dialogContentClasses: DialogContentClasses = generateUtilityClasses('ESDialogContent', ['root']);
