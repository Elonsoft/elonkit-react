import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSSearchClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the clear button. */
  clear: string;
};

export type SFSSearchClassKey = keyof SFSSearchClasses;

export function getSFSSearchUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSearch', slot);
}

export const sfsSearchClasses: SFSSearchClasses = generateUtilityClasses('ESSFSSearch', ['root', 'input', 'clear']);
