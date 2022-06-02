import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GallerySwiperImageClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type GallerySwiperImageClassKey = keyof GallerySwiperImageClasses;

export function getGallerySwiperImageUtilityClass(slot: string): string {
  return generateUtilityClass('ESGallerySwiperImage', slot);
}

export const gallerySwiperImageClasses: GallerySwiperImageClasses = generateUtilityClasses('ESGallerySwiperImage', [
  'root'
]);
