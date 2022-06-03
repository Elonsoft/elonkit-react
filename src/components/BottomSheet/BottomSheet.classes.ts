import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BottomSheetClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type BottomSheetClassKey = keyof BottomSheetClasses;

export function getBottomSheetUtilityClass(slot: string): string {
  return generateUtilityClass('ESBottomSheet', slot);
}

export const bottomSheetClasses: BottomSheetClasses = generateUtilityClasses('ESBottomSheet', [
  'root',
  'icon',
  'text',
  'heading',
  'subheading'
]);
