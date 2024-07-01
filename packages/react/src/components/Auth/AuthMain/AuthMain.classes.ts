import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthMainClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthMainClassKey = keyof AuthMainClasses;

export function getAuthMainUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthMain', slot);
}

export const authMainClasses: AuthMainClasses = generateUtilityClasses('ESAuthMain', ['root']);
