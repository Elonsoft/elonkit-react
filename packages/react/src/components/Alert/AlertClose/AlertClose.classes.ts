import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AlertCloseClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AlertCloseClassKey = keyof AlertCloseClasses;

export function getAlertCloseUtilityClass(slot: string): string {
  return generateUtilityClass('ESAlertClose', slot);
}

export const alertCloseClasses: AlertCloseClasses = generateUtilityClasses('ESAlertClose', ['root']);
