import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type LinearProgressClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if loading=true. */
  loading: string;
  /** Styles applied to the root element if variant='determinate'. */
  determinate: string;
  /** Styles applied to the root element if variant='indeterminate'. */
  indeterminate: string;
  /** Styles applied to the root element if variant='buffer'. */
  buffer: string;
  /** Styles applied to the dashed element if variant='buffer'. */
  dashed: string;
  /** State class applied to the root element if `color="primary"`. */
  dashedColorPrimary: string;
  /** State class applied to the root element if `color="secondary"`. */
  dashedColorSecondary: string;
  /** State class applied to the root element if `color="monoA"`. */
  dashedColorMonoA: string;
  /** State class applied to the root element if `color="monoB"`. */
  dashedColorMonoB: string;
  /** State class applied to the root element if `color="warning"`. */
  dashedColorWarning: string;
  /** State class applied to the root element if `color="error"`. */
  dashedColorError: string;
  /** State class applied to the root element if `color="info"`. */
  dashedColorInfo: string;
  /** State class applied to the root element if `color="black"`. */
  dashedColorBlack: string;
  /** State class applied to the root element if `color="white"`. */
  dashedColorWhite: string;
  /** State class applied to the root element if `color="success"`. */
  dashedColorSuccess: string;
  /** State class applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** State class applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** State class applied to the root element if `color="monoA"`. */
  colorMonoA: string;
  /** State class applied to the root element if `color="monoB"`. */
  colorMonoB: string;
  /** State class applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the root element if `color="error"`. */
  colorError: string;
  /** State class applied to the root element if `color="info"`. */
  colorInfo: string;
  /** State class applied to the root element if `color="black"`. */
  colorBlack: string;
  /** State class applied to the root element if `color="white"`. */
  colorWhite: string;
  /** State class applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the bar element. */
  bar: string;
  /** State class applied to the bar element if `color="primary"`. */
  barColorPrimary: string;
  /** State class applied to the bar element if `color="secondary"`. */
  barColorSecondary: string;
  /** State class applied to the bar element if `color="monoA"`. */
  barColorMonoA: string;
  /** State class applied to the bar element if `color="monoB"`. */
  barColorMonoB: string;
  /** State class applied to the bar element if `color="warning"`. */
  barColorWarning: string;
  /** State class applied to the bar element if `color="error"`. */
  barColorError: string;
  /** State class applied to the bar element if `color="info"`. */
  barColorInfo: string;
  /** State class applied to the bar element if `color="black"`. */
  barColorBlack: string;
  /** State class applied to the bar element if `color="white"`. */
  barColorWhite: string;
  /** State class applied to the bar element if `color="success"`. */
  barColorSuccess: string;

  bar1Indeterminate: string;
  bar1Determinate: string;
  bar1Buffer: string;
  bar2Indeterminate: string;
  bar2Buffer: string;

  /** Styles applied to the loading indicator element. */
  loadingIndicator: string;
};
export type LinearProgressClassKey = keyof LinearProgressClasses;

export function getLinearProgressUtilityClass(slot: string): string {
  return generateUtilityClass('ESLinearProgress', slot);
}

export const linearProgressClasses: LinearProgressClasses = generateUtilityClasses('ESLinearProgress', [
  'root',
  'loading',
  'determinate',
  'indeterminate',
  'buffer',
  'colorPrimary',
  'colorSecondary',
  'colorMonoA',
  'colorMonoB',
  'colorWarning',
  'colorError',
  'colorSuccess',
  'colorInfo',
  'colorBlack',
  'colorWhite',
  'dashed',
  'dashedColorPrimary',
  'dashedColorSecondary',
  'dashedColorMonoA',
  'dashedColorMonoB',
  'dashedColorWarning',
  'dashedColorError',
  'dashedColorSuccess',
  'dashedColorInfo',
  'dashedColorBlack',
  'dashedColorWhite',
  'barColorPrimary',
  'barColorSecondary',
  'barColorMonoA',
  'barColorMonoB',
  'barColorWarning',
  'barColorError',
  'barColorSuccess',
  'barColorInfo',
  'barColorBlack',
  'barColorWhite',
  'bar',
  'bar1Indeterminate',
  'bar1Determinate',
  'bar1Buffer',
  'bar2Indeterminate',
  'bar2Buffer',
  'loadingIndicator'
]);
