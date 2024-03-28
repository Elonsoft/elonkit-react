import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryMetaTextClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if text is primary. */
  primary: string;
};
export type GalleryMetaTextClassKey = keyof GalleryMetaTextClasses;

export function getGalleryMetaTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryMetaText', slot);
}

export const galleryMetaTextClasses: GalleryMetaTextClasses = generateUtilityClasses('ESGalleryMetaText', [
  'root',
  'primary'
]);
