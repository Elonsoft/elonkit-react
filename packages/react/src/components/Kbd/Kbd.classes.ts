import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type KbdClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant='raised'. */
  raised: string;
  /** Styles applied to the root element if variant='contained'. */
  contained: string;
  /** Styles applied to the root element if variant='outlined'. */
  outlined: string;
};
export type KbdClassKey = keyof KbdClasses;

export function getKbdUtilityClass(slot: string): string {
  return generateUtilityClass('ESKbd', slot);
}

export const kbdClasses: KbdClasses = generateUtilityClasses('ESKbd', ['root', 'raised', 'contained', 'outlined']);
