import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TabScrollButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
};

export type TabScrollButtonClassKey = keyof TabScrollButtonClasses;

export function getTabScrollButtonUtilityClass(slot: string) {
  return generateUtilityClass('ESTabScrollButton', slot);
}
export const tabScrollButtonClasses: TabScrollButtonClasses = generateUtilityClasses('MuiTabScrollButton', [
  'root',
  'disabled'
]);
