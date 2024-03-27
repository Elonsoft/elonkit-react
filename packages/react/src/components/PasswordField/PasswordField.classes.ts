import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PasswordFieldClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type PasswordFieldClassKey = keyof PasswordFieldClasses;

export function getPasswordFieldUtilityClass(slot: string): string {
  return generateUtilityClass('ESPasswordField', slot);
}

export const passwordFieldClasses: PasswordFieldClasses = generateUtilityClasses('ESPasswordField', ['root']);
