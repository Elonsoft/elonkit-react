import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FlagClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type FlagClassKey = keyof FlagClasses;

export function getFlagUtilityClass(slot: string): string {
  return generateUtilityClass('ESFlag', slot);
}

export const flagClasses: FlagClasses = generateUtilityClasses('ESFlag', ['root']);
