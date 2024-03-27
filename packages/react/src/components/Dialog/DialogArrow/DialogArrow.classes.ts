import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogArrowClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if direction='prev'. */
  prev: string;
  /** Styles applied to the root element if direction='next'. */
  next: string;
  /** Styles applied to the button element. */
  button: string;
};
export type DialogArrowClassKey = keyof DialogArrowClasses;

export function getDialogArrowUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogArrow', slot);
}

export const dialogArrowClasses: DialogArrowClasses = generateUtilityClasses('ESDialogArrow', [
  'root',
  'button',
  'prev',
  'next'
]);
