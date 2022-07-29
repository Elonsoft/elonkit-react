import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSRowClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SFSRowClassKey = keyof SFSRowClasses;

export function getSFSRowUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSRow', slot);
}

export const sfsRowClasses: SFSRowClasses = generateUtilityClasses('ESSFSRow', ['root']);
