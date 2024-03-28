import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type GalleryPanelClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root if position='bottom'. */
  positionBottom: string;
  /** Styles applied to the root if position='top'. */
  positionTop: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the content element if it is forced to be visible. */
  contentVisible: string;
  /** Styles applied to the content element if it is expanded. */
  contentExpanded: string;
};
export type GalleryPanelClassKey = keyof GalleryPanelClasses;

export function getGalleryPanelUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryPanel', slot);
}

export const galleryPanelClasses: GalleryPanelClasses = generateUtilityClasses('ESGalleryPanel', [
  'root',
  'positionBottom',
  'positionTop',
  'content',
  'contentVisible',
  'contentExpanded'
]);
