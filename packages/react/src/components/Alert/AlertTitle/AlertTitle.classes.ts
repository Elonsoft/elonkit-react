import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AlertTitleClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AlertTitleClassKey = keyof AlertTitleClasses;

export function getAlertTitleUtilityClass(slot: string): string {
  return generateUtilityClass('ESAlertTitle', slot);
}

export const alertTitleClasses: AlertTitleClasses = generateUtilityClasses('ESAlertTitle', ['root']);
