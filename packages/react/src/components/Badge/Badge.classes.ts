import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BadgeClasses = {
  /** Styles applied to the root element. */
  root: string;
  clickable: string;

  colorMonoA: string;
  colorMonoB: string;
  colorMonoB500: string;
  colorPrimary: string;
  colorSecondary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;

  size6: string;
  size8: string;
  size12: string;
  size14: string;
  size16: string;
  size20: string;
  size24: string;
};
export type BadgeClassKey = keyof BadgeClasses;

export function getBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESBadge', slot);
}

export const badgeClasses: BadgeClasses = generateUtilityClasses('ESBadge', [
  'root',
  'clickable',
  'colorMonoA',
  'colorMonoB',
  'colorMonoB500',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorWarning',
  'colorError',
  'colorInfo',
  'size6',
  'size8',
  'size12',
  'size14',
  'size16',
  'size20',
  'size24'
]);
