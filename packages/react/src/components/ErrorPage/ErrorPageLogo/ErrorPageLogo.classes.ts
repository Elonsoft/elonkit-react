import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ErrorPageLogoClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageLogoClassKey = keyof ErrorPageLogoClasses;

export function getErrorPageLogoUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageLogo', slot);
}

export const errorPageLogoClasses: ErrorPageLogoClasses = generateUtilityClasses('ESErrorPageLogo', ['root']);
