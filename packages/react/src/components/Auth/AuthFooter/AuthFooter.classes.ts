import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthFooterClassKey = keyof AuthFooterClasses;

export function getAuthFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthFooter', slot);
}

export const authFooterClasses: AuthFooterClasses = generateUtilityClasses('ESAuthFooter', ['root']);
