import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ConfirmationDialogClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon element. */
  icon: string;
};
export type ConfirmationDialogClassKey = keyof ConfirmationDialogClasses;

export function getConfirmationDialogUtilityClass(slot: string): string {
  return generateUtilityClass('ESConfirmationDialog', slot);
}

export const confirmationDialogClasses: ConfirmationDialogClasses = generateUtilityClasses('ESConfirmationDialog', [
  'root',
  'icon',
]);
