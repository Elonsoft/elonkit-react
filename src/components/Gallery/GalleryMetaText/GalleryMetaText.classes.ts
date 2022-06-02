import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryMetaTextClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if text is primary. */
  primary: string;
  /** Styles applied to the root element if text is visible on mobile. */
  mobile: string;
};
export type GalleryMetaTextClassKey = keyof GalleryMetaTextClasses;

export function getGalleryMetaTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryMetaText', slot);
}

export const galleryMetaTextClasses: GalleryMetaTextClasses = generateUtilityClasses('ESGalleryMetaText', [
  'root',
  'primary',
  'mobile'
]);
