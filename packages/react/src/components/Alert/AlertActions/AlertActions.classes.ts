import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AlertActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AlertActionsClassKey = keyof AlertActionsClasses;

export function getAlertActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESAlertActions', slot);
}

export const alertActionsClasses: AlertActionsClasses = generateUtilityClasses('ESAlertActions', ['root']);
