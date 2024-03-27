import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryActionsButtonGroupClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type GalleryActionsButtonGroupClassKey = keyof GalleryActionsButtonGroupClasses;

export function getGalleryActionsButtonGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryActionsButtonGroup', slot);
}

export const galleryActionsButtonGroupClasses: GalleryActionsButtonGroupClasses = generateUtilityClasses(
  'ESGalleryActionsButtonGroup',
  ['root']
);
