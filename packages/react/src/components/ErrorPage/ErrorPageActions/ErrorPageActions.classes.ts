import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ErrorPageActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageActionsClassKey = keyof ErrorPageActionsClasses;

export function getErrorPageActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageActions', slot);
}

export const errorPageActionsClasses: ErrorPageActionsClasses = generateUtilityClasses('ESErrorPageActions', ['root']);
