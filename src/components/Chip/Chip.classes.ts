import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ChipClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the label element. */
  label: string;
  /** Styles applied to the start icon element. */
  startIcon: string;
  /** Styles applied to the end icon element. */
  endIcon: string;
  /** Styles applied to the delete icon element. */
  deleteIcon: string;
};

export type ChipClassKey = keyof ChipClasses;

export function getChipUtilityClass(slot: string): string {
  return generateUtilityClass('ESChip', slot);
}

export const chipClasses: ChipClasses = generateUtilityClasses('ESChip', [
  'root',
  'label',
  'startIcon',
  'endIcon',
  'deleteIcon'
]);
