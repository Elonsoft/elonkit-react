import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SnackbarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the action element. */
  action: string;
};

export type SnackbarClassKey = keyof SnackbarClasses;

export function getSnackbarUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbar', slot);
}

export const snackbarClasses: SnackbarClasses = generateUtilityClasses('ESSnackbar', ['root', 'content', 'action']);
