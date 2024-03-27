import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type LoadingButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if loading=true. */
  loading: string;
  /** Styles applied to the loading indicator element. */
  loadingIndicator: string;
};
export type LoadingButtonClassKey = keyof LoadingButtonClasses;

export function getLoadingButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESLoadingButton', slot);
}

export const loadingButtonClasses: LoadingButtonClasses = generateUtilityClasses('ESLoadingButton', [
  'root',
  'loading',
  'loadingIndicator'
]);
