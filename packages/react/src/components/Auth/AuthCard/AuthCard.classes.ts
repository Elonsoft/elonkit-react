import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthCardClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthCardClassKey = keyof AuthCardClasses;

export function getAuthCardUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthCard', slot);
}

export const authCardClasses: AuthCardClasses = generateUtilityClasses('ESAuthCard', ['root']);
