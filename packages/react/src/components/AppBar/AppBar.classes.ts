import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AppBarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if it is in stuck state. */
  stuck: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the prominent title element. */
  titleProminent: string;
  /** Styles applied to the adornment elements. */
  adornment: string;
};
export type AppBarClassKey = keyof AppBarClasses;

export function getAppBarUtilityClass(slot: string): string {
  return generateUtilityClass('ESAppBar', slot);
}

export const appBarClasses: AppBarClasses = generateUtilityClasses('ESAppBar', [
  'root',
  'stuck',
  'title',
  'titleProminent',
  'adornment'
]);
