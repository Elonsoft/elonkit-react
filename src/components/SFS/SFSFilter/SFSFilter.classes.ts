import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSFilterClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SFSFilterClassKey = keyof SFSFilterClasses;

export function getSFSFilterUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSFilter', slot);
}

export const sfsFilterClasses: SFSFilterClasses = generateUtilityClasses('ESSFSFilter', ['root']);
