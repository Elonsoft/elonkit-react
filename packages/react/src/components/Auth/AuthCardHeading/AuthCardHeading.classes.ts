import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthCardHeadingClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthCardHeadingClassKey = keyof AuthCardHeadingClasses;

export function getAuthCardHeadingUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthCardHeading', slot);
}

export const authCardHeadingClasses: AuthCardHeadingClasses = generateUtilityClasses('ESAuthCardHeading', ['root']);
