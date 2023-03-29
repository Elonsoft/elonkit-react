import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ChipsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  showMore: string;
};
export type ChipsClassKey = keyof ChipsClasses;

export function getChipsUtilityClass(slot: string): string {
  return generateUtilityClass('ESChips', slot);
}

export const chipsClasses: ChipsClasses = generateUtilityClasses('ESChips', ['root', 'showMore']);
