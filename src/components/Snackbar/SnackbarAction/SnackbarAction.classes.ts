import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarActionClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the progress element. */
  progress: string;
};

export type SnackbarActionClassKey = keyof SnackbarActionClasses;

export function getSnackbarActionUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbarAction', slot);
}

export const snackbarActionClasses: SnackbarActionClasses = generateUtilityClasses('ESSnackbarAction', [
  'root',
  'progress'
]);
