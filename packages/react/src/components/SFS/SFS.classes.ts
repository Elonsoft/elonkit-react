import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SFSClassKey = keyof SFSClasses;

export function getSFSUtilityClass(slot: string) {
  return generateUtilityClass('ESSFS', slot);
}

export const sfsClasses: SFSClasses = generateUtilityClasses('ESSFS', ['root']);
