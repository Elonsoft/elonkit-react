import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSSortingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the menu open button. */
  menuButton: string;
  /** Styles applied to the menu open button badge. */
  menuButtonBadge: string;
};

export type SFSSortingClassKey = keyof SFSSortingClasses;

export function getSFSSortingUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSorting', slot);
}

export const sfsSortingClasses: SFSSortingClasses = generateUtilityClasses('ESSFSSorting', [
  'root',
  'menuButton',
  'menuButtonBadge'
]);
