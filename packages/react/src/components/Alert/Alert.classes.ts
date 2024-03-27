import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AlertClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if severity="success" or color="success". */
  standardSuccess: string;
  /** Styles applied to the root element if severity="warning" or color="warning". */
  standardWarning: string;
  /** Styles applied to the root element if severity="error" or color="error". */
  standardError: string;
  /** Styles applied to the root element if severity="info" or color="info". */
  standardInfo: string;
  /** Styles applied to the root element if color="monoA". */
  standardMonoA: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the action wrapper element. */
  action: string;
};
export type AlertClassKey = keyof AlertClasses;

export function getAlertUtilityClass(slot: string): string {
  return generateUtilityClass('ESAlert', slot);
}

export const alertClasses: AlertClasses = generateUtilityClasses('ESAlert', [
  'root',
  'standardSuccess',
  'standardWarning',
  'standardError',
  'standardInfo',
  'standardMonoA',
  'icon',
  'content',
  'action'
]);
