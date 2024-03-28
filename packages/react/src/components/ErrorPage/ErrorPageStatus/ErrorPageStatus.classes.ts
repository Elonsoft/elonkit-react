import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ErrorPageStatusClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageStatusClassKey = keyof ErrorPageStatusClasses;

export function getErrorPageStatusUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageStatus', slot);
}

export const errorPageStatusClasses: ErrorPageStatusClasses = generateUtilityClasses('ESErrorPageStatus', ['root']);
