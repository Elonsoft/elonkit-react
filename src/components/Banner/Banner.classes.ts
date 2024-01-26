import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BannerClasses = {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the root element if variant="colored". */
  variantColored: string;
  /** Styles applied to the root element if variant="monoB". */
  variantMonoB: string;

  /** Styles applied to the root element if severity="success" or color="success". */
  colorSuccess: string;
  /** Styles applied to the root element if severity="warning" or color="warning". */
  colorWarning: string;
  /** Styles applied to the root element if severity="error" or color="error". */
  colorError: string;
  /** Styles applied to the root element if severity="info" or color="info". */
  colorInfo: string;
  /** Styles applied to the root element if color="monoA". */
  colorMonoA: string;
  /** Styles applied to the root element if color="primary". */
  colorPrimary: string;
  /** Styles applied to the root element if color="secondary". */
  colorSecondary: string;

  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the message element. */
  message: string;
  /** Styles applied to the action wrapper element. */
  action: string;
};
export type BannerClassKey = keyof BannerClasses;

export function getBannerUtilityClass(slot: string): string {
  return generateUtilityClass('ESBanner', slot);
}

export const bannerClasses: BannerClasses = generateUtilityClasses('ESBanner', [
  'root',
  'variantColored',
  'variantMonoB',
  'colorSuccess',
  'colorWarning',
  'colorError',
  'colorInfo',
  'colorMonoA',
  'colorPrimary',
  'colorSecondary',
  'icon',
  'wrapper',
  'content',
  'message',
  'action'
]);
