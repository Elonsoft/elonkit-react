import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BannerTitleClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type BannerTitleClassKey = keyof BannerTitleClasses;

export function getBannerTitleUtilityClass(slot: string): string {
  return generateUtilityClass('ESBannerTitle', slot);
}

export const bannerTitleClasses: BannerTitleClasses = generateUtilityClasses('ESBannerTitle', ['root']);
