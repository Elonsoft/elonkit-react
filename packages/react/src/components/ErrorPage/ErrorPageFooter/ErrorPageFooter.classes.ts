import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ErrorPageFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageFooterClassKey = keyof ErrorPageFooterClasses;

export function getErrorPageFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageFooter', slot);
}

export const errorPageFooterClasses: ErrorPageFooterClasses = generateUtilityClasses('ESErrorPageFooter', ['root']);
