import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the close button. */
  buttonClose: string;
  /** Styles applied to the thumbnails button. */
  buttonThumbnails: string;
};
export type GalleryActionsClassKey = keyof GalleryActionsClasses;

export function getGalleryActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryActions', slot);
}

export const galleryActionsClasses: GalleryActionsClasses = generateUtilityClasses('ESGalleryActions', [
  'root',
  'buttonClose',
  'buttonThumbnails'
]);
