import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthLogoClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthLogoClassKey = keyof AuthLogoClasses;

export function getAuthLogoUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthLogo', slot);
}

export const authLogoClasses: AuthLogoClasses = generateUtilityClasses('ESAuthLogo', ['root']);
