import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AuthCardActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AuthCardActionsClassKey = keyof AuthCardActionsClasses;

export function getAuthCardActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESAuthCardActions', slot);
}

export const authCardActionsClasses: AuthCardActionsClasses = generateUtilityClasses('ESAuthCardActions', ['root']);
