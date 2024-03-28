import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerFadingRingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the animate element. */
  circle: string;
  /** Styles applied to the root element if `color='primary'`. */
  primary: string;
  /** Styles applied to the root element if `color='secondary'`. */
  secondary: string;
  /** Styles applied to the root element if `color='monoA'`. */
  monoA: string;
  /** Styles applied to the root element if `color='inherit'`. */
  inherit: string;
};
export type SpinnerFadingRingClassKey = keyof SpinnerFadingRingClasses;

export function getSpinnerFadingRingUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerFadingRing', slot);
}

export const spinnerFadingRingClasses: SpinnerFadingRingClasses = generateUtilityClasses('ESSpinnerFadingRing', [
  'root',
  'circle',
  'primary',
  'secondary',
  'monoA',
  'inherit'
]);
