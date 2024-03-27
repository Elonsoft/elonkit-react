import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSFiltersGroupClasses = {
  /** Styled applied to the root element. */
  root: string;
  /** Styled applied to the title element. */
  title: string;
};

export type SFSFiltersGroupClassKey = keyof SFSFiltersGroupClasses;

export function getSFSFiltersGroupUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSFiltersGroup', slot);
}

export const sfsFiltersGroupClasses: SFSFiltersGroupClasses = generateUtilityClasses('ESSFSFiltersGroup', [
  'root',
  'title'
]);
