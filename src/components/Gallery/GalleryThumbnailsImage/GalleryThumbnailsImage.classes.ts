import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryThumbnailsImageClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type GalleryThumbnailsImageClassKey = keyof GalleryThumbnailsImageClasses;

export function getGalleryThumbnailsImageUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryThumbnailsImage', slot);
}

export const galleryThumbnailsImageClasses: GalleryThumbnailsImageClasses = generateUtilityClasses(
  'ESGalleryThumbnailsImage',
  ['root']
);
