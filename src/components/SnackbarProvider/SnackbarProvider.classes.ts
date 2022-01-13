import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarProviderClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SnackbarClassKey = keyof SnackbarProviderClasses;

export function getSnackbarProviderUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbarProvider', slot);
}

export const snackbarProviderClasses: SnackbarProviderClasses = generateUtilityClasses('ESSnackbarProvider', ['root']);
