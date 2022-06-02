import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GalleryPanelClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if gallery is in fullscreen mode. */
  rootFullscreen: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the content element if gallery is in fullscreen mode. */
  contentFullscreen: string;
  /** Styles applied to the content element if it is forced to be visible. */
  contentVisible: string;
};
export type GalleryPanelClassKey = keyof GalleryPanelClasses;

export function getGalleryPanelUtilityClass(slot: string): string {
  return generateUtilityClass('ESGalleryPanel', slot);
}

export const galleryPanelClasses: GalleryPanelClasses = generateUtilityClasses('ESGalleryPanel', [
  'root',
  'rootFullscreen',
  'content',
  'contentFullscreen',
  'contentVisible'
]);
