import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerRingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `color='primary'`. */
  primary: string;
  /** Styles applied to the root element if `color='secondary'`. */
  secondary: string;
  /** Styles applied to the root element if `color='monoA'`. */
  monoA: string;
  /** Styles applied to the root element if `color='inherit'`. */
  inherit: string;
};
export type SpinnerRingClassKey = keyof SpinnerRingClasses;

export function getSpinnerRingUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerRing', slot);
}

export const spinnerRingClasses: SpinnerRingClasses = generateUtilityClasses('ESSpinnerRing', [
  'root',
  'primary',
  'secondary',
  'monoA',
  'inherit'
]);
