import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SpinnerFadingDoubleRingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the bottom animate element. */
  lowerPath: string;
  /** Styles applied to the top animate element. */
  upperPath: string;
  /** Styles applied to the root element if `color='primary'`. */
  primary: string;
  /** Styles applied to the root element if `color='secondary'`. */
  secondary: string;
  /** Styles applied to the root element if `color='monoA'`. */
  monoA: string;
  /** Styles applied to the root element if `color='inherit'`. */
  inherit: string;
};
export type SpinnerFadingDoubleRingClassKey = keyof SpinnerFadingDoubleRingClasses;

export function getSpinnerFadingDoubleRingUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinnerFadingDoubleRing', slot);
}

export const spinnerFadingDoubleRingClasses: SpinnerFadingDoubleRingClasses = generateUtilityClasses(
  'ESSpinnerFadingDoubleRing',
  ['root', 'lowerPath', 'upperPath', 'primary', 'secondary', 'monoA', 'inherit']
);
