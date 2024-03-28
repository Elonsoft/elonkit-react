import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GallerySwiperClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if gallery is in fullscreen mode. */
  rootFullscreen: string;
  /** Styles applied to the swiper element. */
  swiper: string;
};
export type GallerySwiperClassKey = keyof GallerySwiperClasses;

export function getGallerySwiperUtilityClass(slot: string): string {
  return generateUtilityClass('ESGallerySwiper', slot);
}

export const gallerySwiperClasses: GallerySwiperClasses = generateUtilityClasses('ESGallerySwiper', [
  'root',
  'rootFullscreen',
  'swiper'
]);
