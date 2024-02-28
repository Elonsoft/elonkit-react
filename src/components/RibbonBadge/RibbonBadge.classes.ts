import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type RibbonBadgeClasses = {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the root element if color='monoB500'. */
  colorMonoB500: string;

  /** Styles applied to the root element if color='primary'. */
  colorPrimary: string;

  /** Styles applied to the root element if color='secondary'. */
  colorSecondary: string;

  /** Styles applied to the root element if color='success'. */
  colorSuccess: string;

  /** Styles applied to the root element if color='warning'. */
  colorWarning: string;

  /** Styles applied to the root element if color='error'. */
  colorError: string;

  /** Styles applied to the root element if color='info'. */
  colorInfo: string;

  /** Styles applied to the root element if orientation='left'. */
  orientationLeft: string;

  /** Styles applied to the root element if orientation='right'. */
  orientationRight: string;

  /** Styles applied to the root element if clickable={true}. */
  clickable: string;
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
  'orientationRight',
  'clickable'
]);
