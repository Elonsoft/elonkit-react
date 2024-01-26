import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type BannerActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type BannerActionsClassKey = keyof BannerActionsClasses;

export function getBannerActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESBannerActions', slot);
}

export const bannerActionsClasses: BannerActionsClasses = generateUtilityClasses('ESBannerActions', ['root']);
