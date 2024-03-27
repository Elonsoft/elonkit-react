import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogTitleClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if sticky=true. */
  sticky: string;
};
export type DialogTitleClassKey = keyof DialogTitleClasses;

export function getDialogTitleUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogTitle', slot);
}

export const dialogTitleClasses: DialogTitleClasses = generateUtilityClasses('ESDialogTitle', ['root', 'sticky']);
