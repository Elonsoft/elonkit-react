import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerFadingBarsClasses = {
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
export type SpinnerFadingBarsClassKey = keyof SpinnerFadingBarsClasses;

export function getSpinnerFadingBarsUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerFadingBars', slot);
}

export const spinnerFadingBarsClasses: SpinnerFadingBarsClasses = generateUtilityClasses('ESSpinnerFadingBars', [
  'root',
  'primary',
  'secondary',
  'monoA',
  'inherit'
]);
