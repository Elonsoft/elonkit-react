import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
};
export type GalleryClassKey = keyof GalleryClasses;

export function getGalleryUtilityClass(slot: string): string {
  return generateUtilityClass('ESGallery', slot);
}

export const galleryClasses: GalleryClasses = generateUtilityClasses('ESGallery', ['root', 'content']);
