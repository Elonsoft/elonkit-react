import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthClassKey = keyof AuthClasses;

export function getAuthUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuth', slot);
}

export const authClasses: AuthClasses = generateUtilityClasses('ESAuth', ['root']);
