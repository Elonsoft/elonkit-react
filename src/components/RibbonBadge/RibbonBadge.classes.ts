import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type RibbonBadgeClasses = {
  /** Styles applied to the root element. */
  root: string;

  colorMonoB500: string;
  colorPrimary: string;
  colorSecondary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;

  orientationLeft: string;
  orientationRight: string;
};
export type RibbonBadgeClassKey = keyof RibbonBadgeClasses;

export function getRibbonBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESRibbonBadge', slot);
}

export const ribbonBadgeClasses: RibbonBadgeClasses = generateUtilityClasses('ESRibbonBadge', [
  'root',
  'colorMonoB500',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorWarning',
  'colorError',
  'colorInfo',
  'orientationLeft',
  'orientationRight'
]);
