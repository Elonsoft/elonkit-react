import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TouchRippleClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if center=true. */
  center: string;
  /** Styles applied to the root element if center=true. */
  hovered: string;
  /** Styles applied to the root element if center=true. */
  pressed: string;
};
export type TouchRippleClassKey = keyof TouchRippleClasses;

export function getTouchRippleUtilityClass(slot: string): string {
  return generateUtilityClass('ESTouchRipple', slot);
}

export const touchRippleClasses: TouchRippleClasses = generateUtilityClasses('ESTouchRipple', [
  'root',
  'center',
  'hovered',
  'pressed'
]);
