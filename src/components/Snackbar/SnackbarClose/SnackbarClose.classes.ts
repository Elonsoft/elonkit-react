import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarCloseClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the progress element. */
  progress: string;
};

export type SnackbarCloseClassKey = keyof SnackbarCloseClasses;

export function getSnackbarCloseUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbarClose', slot);
}

export const snackbarCloseClasses: SnackbarCloseClasses = generateUtilityClasses('ESSnackbarClose', [
  'root',
  'progress'
]);
