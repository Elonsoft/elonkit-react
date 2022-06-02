import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the buttons. */
  button: string;
  /** Styles applied to the thumbnails button. */
  buttonThumbnails: string;
};
export type GalleryActionsClassKey = keyof GalleryActionsClasses;

export function getGalleryActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryActions', slot);
}

export const galleryActionsClasses: GalleryActionsClasses = generateUtilityClasses('ESGalleryActions', [
  'root',
  'button',
  'buttonThumbnails'
]);
