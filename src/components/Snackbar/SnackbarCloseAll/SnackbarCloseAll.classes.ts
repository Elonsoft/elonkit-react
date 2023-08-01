import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarCloseAllClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SnackbarCloseAllClassKey = keyof SnackbarCloseAllClasses;

export function getSnackbarCloseAllUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbarCloseAll', slot);
}

export const snackbarCloseAllClasses: SnackbarCloseAllClasses = generateUtilityClasses('ESSnackbarCloseAll', ['root']);
