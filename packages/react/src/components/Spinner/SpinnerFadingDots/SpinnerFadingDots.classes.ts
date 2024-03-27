import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerFadingDotsClasses = {
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
export type SpinnerFadingDotsClassKey = keyof SpinnerFadingDotsClasses;

export function getSpinnerFadingDotsUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerFadingDots', slot);
}

export const spinnerFadingDotsClasses: SpinnerFadingDotsClasses = generateUtilityClasses('ESSpinnerFadingDots', [
  'root',
  'primary',
  'secondary',
  'monoA',
  'inherit'
]);
