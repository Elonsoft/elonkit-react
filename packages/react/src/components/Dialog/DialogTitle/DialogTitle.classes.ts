import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogTitleClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the prominent element. */
  titleProminent: string;
  /** Styles applied to the root element if sticky=true. */
  sticky: string;
  /** Styles applied to the root element if size='large'. */
  large: string;
  /** Styles applied to the root element if size='medium'. */
  medium: string;
  /** Styles applied to the root element if size='small'. */
  small: string;
};
export type DialogTitleClassKey = keyof DialogTitleClasses;

export function getDialogTitleUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogTitle', slot);
}

export const dialogTitleClasses: DialogTitleClasses = generateUtilityClasses('ESDialogTitle', [
  'root',
  'sticky',
  'large',
  'medium',
  'small',
  'titleProminent',
]);
