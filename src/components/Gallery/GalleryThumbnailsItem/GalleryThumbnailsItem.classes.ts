import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryThumbnailsItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if item is active. */
  active: string;
};
export type GalleryThumbnailsItemClassKey = keyof GalleryThumbnailsItemClasses;

export function getGalleryThumbnailsItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryThumbnailsItem', slot);
}

export const galleryThumbnailsItemClasses: GalleryThumbnailsItemClasses = generateUtilityClasses(
  'ESGalleryThumbnailsItem',
  ['root', 'active']
);
