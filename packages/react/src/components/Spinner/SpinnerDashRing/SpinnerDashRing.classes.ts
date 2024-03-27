import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerDashRingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the dashAnimate element. */
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
export type SpinnerDashRingClassKey = keyof SpinnerDashRingClasses;

export function getSpinnerDashRingUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerDashRing', slot);
}

export const spinnerDashRingClasses: SpinnerDashRingClasses = generateUtilityClasses('ESSpinnerDashRing', [
  'root',
  'circle',
  'primary',
  'secondary',
  'monoA',
  'inherit'
]);
