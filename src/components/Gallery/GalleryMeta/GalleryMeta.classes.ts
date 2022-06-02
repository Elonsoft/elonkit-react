import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryMetaClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element. */
  content: string;
  /** Styles applied to the progress element. */
  progress: string;
  /** Styles applied to the close button element. */
  button: string;
};
export type GalleryMetaClassKey = keyof GalleryMetaClasses;

export function getGalleryMetaUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryMeta', slot);
}

export const galleryMetaClasses: GalleryMetaClasses = generateUtilityClasses('ESGalleryMeta', [
  'root',
  'content',
  'progress',
  'button'
]);
