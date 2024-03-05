import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ButtonBaseClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `disabled=true`. */
  disabled: string;
  /** Styles applied to the root element if `disableTouchRipple=true`. */
  disableTouchRipple: string;
  /** Styles applied to the root element if button is pressed. */
  pressed: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
};
export type ButtonBaseClassKey = keyof ButtonBaseClasses;

export function getButtonBaseUtilityClass(slot: string): string {
  return generateUtilityClass('ESButtonBase', slot);
}

export const buttonBaseClasses: ButtonBaseClasses = generateUtilityClasses('ESButtonBase', [
  'root',
  'disabled',
  'disableTouchRipple',
  'pressed',
  'wrapper'
]);
