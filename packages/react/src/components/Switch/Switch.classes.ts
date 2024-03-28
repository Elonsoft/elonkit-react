import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SwitchClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component checked. */
  checked: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the root element if size='large'. */
  large: string;
  /** Styles applied to the root element if size='medium'. */
  medium: string;
  /** Styles applied to the root element if size='small'. */
  small: string;
  /** Styles applied to the track element. */
  track: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the thumb element. */
  thumb: string;
  /** Styles applied to the button element. */
  button: string;
};

export type SwitchClassKey = keyof SwitchClasses;

export function getSwitchUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwitch', slot);
}

export const switchClasses: SwitchClasses = generateUtilityClasses('ESSwitch', [
  'root',
  'checked',
  'track',
  'input',
  'thumb',
  'button',
  'disabled',
  'large',
  'medium',
  'small'
]);
