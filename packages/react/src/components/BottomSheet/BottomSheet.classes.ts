import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BottomSheetClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the paper element. */
  paper: string;
};

export type BottomSheetClassKey = keyof BottomSheetClasses;

export function getBottomSheetUtilityClass(slot: string): string {
  return generateUtilityClass('ESBottomSheet', slot);
}

export const bottomSheetClasses: BottomSheetClasses = generateUtilityClasses('ESBottomSheet', [
  'root',
  'wrapper',
  'container',
  'content',
  'paper'
]);
