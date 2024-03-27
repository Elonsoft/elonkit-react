import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ErrorPageHeadingClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageHeadingClassKey = keyof ErrorPageHeadingClasses;

export function getErrorPageHeadingUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageHeading', slot);
}

export const errorPageHeadingClasses: ErrorPageHeadingClasses = generateUtilityClasses('ESErrorPageHeading', ['root']);
