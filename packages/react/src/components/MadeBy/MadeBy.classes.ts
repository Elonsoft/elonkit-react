import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type MadeByClasses = {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the root element if clickable={true}. */
  clickable: string;
};
export type MadeByClassKey = keyof MadeByClasses;

export function getMadeByUtilityClass(slot: string): string {
  return generateUtilityClass('ESMadeBy', slot);
}

export const madeByClasses: MadeByClasses = generateUtilityClasses('ESMadeBy', ['root', 'clickable']);
