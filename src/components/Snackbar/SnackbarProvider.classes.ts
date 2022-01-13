import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarProviderClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the snackbar direction. */
  anchorOrigin: string;
};

export type SnackbarProviderClassKey = keyof SnackbarProviderClasses;

export function getSnackbarProviderUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbarProvider', slot);
}

export const snackbarProviderClasses: SnackbarProviderClasses = generateUtilityClasses('ESSnackbarProvider', [
  'root',
  'anchorOrigin'
]);
