import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type MenuGroupClasses = {
  /** Styles applied to the root element. */
  root: string;

  size32: string;
  size28: string;
  size24: string;
  sticky: string;
  divider: string;
};
export type MenuGroupClassKey = keyof MenuGroupClasses;

export function getMenuGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESMenuGroup', slot);
}

export const menuGroupClasses: MenuGroupClasses = generateUtilityClasses('ESMenuGroup', [
  'root',
  'size32',
  'size28',
  'size24',
  'sticky',
  'divider',
]);
