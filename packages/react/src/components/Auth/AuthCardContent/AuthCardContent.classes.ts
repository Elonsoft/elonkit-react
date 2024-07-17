import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthCardContentClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthCardContentClassKey = keyof AuthCardContentClasses;

export function getAuthCardContentUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthCardContent', slot);
}

export const authCardContentClasses: AuthCardContentClasses = generateUtilityClasses('ESAuthCardContent', ['root']);
