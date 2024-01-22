import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ErrorPageClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageClassKey = keyof ErrorPageClasses;

export function getErrorPageUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPage', slot);
}

export const errorPageClasses: ErrorPageClasses = generateUtilityClasses('ESErrorPage', ['root']);
