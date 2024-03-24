import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type LinearProgressClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if loading=true. */
  loading: string;
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
  'loadingIndicator'
]);
