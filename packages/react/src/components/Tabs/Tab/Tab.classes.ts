import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TabClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: string;
  /** Styles applied to the label wrapper element. */
  labelWrapper: string;
  /** State class applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: string;
  /** State class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: string;
  /** Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: string;
  /** Styles applied to the root element if it has startIcon. */
  startIcon: string;
  /** Styles applied to the root element if it has endIcon. */
  endIcon: string;
  /** Styles applied to the wrapper element of `icon` if `icon` is provided. */
  iconWrapper: string;
};

export type TabClassKey = keyof TabClasses;

export function getTabUtilityClass(slot: string) {
  return generateUtilityClass('ESTab', slot);
}
export const tabClasses: TabClasses = generateUtilityClasses('ESTab', [
  'root',
  'labelIcon',
  'labelWrapper',
  'selected',
  'disabled',
  'fullWidth',
  'startIcon',
  'endIcon',
  'iconWrapper'
]);
