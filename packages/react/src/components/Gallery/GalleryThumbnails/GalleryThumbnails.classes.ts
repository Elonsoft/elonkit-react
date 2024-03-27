import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryThumbnailsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the swiper element. */
  swiper: string;
};
export type GalleryThumbnailsClassKey = keyof GalleryThumbnailsClasses;

export function getGalleryThumbnailsUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryThumbnails', slot);
}

export const galleryThumbnailsClasses: GalleryThumbnailsClasses = generateUtilityClasses('ESGalleryThumbnails', [
  'root',
  'swiper'
]);
