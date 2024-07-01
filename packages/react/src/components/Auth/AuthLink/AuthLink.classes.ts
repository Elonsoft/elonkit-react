import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthLinkClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthLinkClassKey = keyof AuthLinkClasses;

export function getAuthLinkUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthLink', slot);
}

export const authLinkClasses: AuthLinkClasses = generateUtilityClasses('ESAuthLink', ['root']);
