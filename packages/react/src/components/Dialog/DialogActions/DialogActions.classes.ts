import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if sticky=true. */
  sticky: string;
  /** Styles applied to the root element if sticky=true and element is in stuck state. */
  stuck: string;
};
export type DialogActionsClassKey = keyof DialogActionsClasses;

export function getDialogActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogActions', slot);
}

export const dialogActionsClasses: DialogActionsClasses = generateUtilityClasses('ESDialogActions', [
  'root',
  'sticky',
  'stuck'
]);
