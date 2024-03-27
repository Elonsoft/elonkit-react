import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryMetaClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element. */
  content: string;
  /** Styles applied to the close button element. */
  buttonClose: string;
};
export type GalleryMetaClassKey = keyof GalleryMetaClasses;

export function getGalleryMetaUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryMeta', slot);
}

export const galleryMetaClasses: GalleryMetaClasses = generateUtilityClasses('ESGalleryMeta', [
  'root',
  'content',
  'buttonClose'
]);
