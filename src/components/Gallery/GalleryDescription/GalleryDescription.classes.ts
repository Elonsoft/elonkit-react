import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryDescriptionClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the button element. */
  button: string;
};
export type GalleryDescriptionClassKey = keyof GalleryDescriptionClasses;

export function getGalleryDescriptionUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryDescription', slot);
}

export const galleryDescriptionClasses: GalleryDescriptionClasses = generateUtilityClasses('ESGalleryDescription', [
  'root',
  'content',
  'text',
  'button'
]);
