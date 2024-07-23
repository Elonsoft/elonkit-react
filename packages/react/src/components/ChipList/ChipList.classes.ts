import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ChipListClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
};

export type ChipListClassKey = keyof ChipListClasses;

export function getChipListUtilityClass(slot: string): string {
  return generateUtilityClass('ESChipList', slot);
}

export const chipListClasses: ChipListClasses = generateUtilityClasses('ESChipList', ['root', 'button']);
