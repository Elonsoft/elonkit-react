import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryMetaSeparatorClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type GalleryMetaSeparatorClassKey = keyof GalleryMetaSeparatorClasses;

export function getGalleryMetaSeparatorUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryMetaSeparator', slot);
}

export const galleryMetaSeparatorClasses: GalleryMetaSeparatorClasses = generateUtilityClasses(
  'ESGalleryMetaSeparator',
  ['root']
);
