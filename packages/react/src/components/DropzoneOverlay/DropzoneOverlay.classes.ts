import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DropzoneOverlayClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content wrapper element. */
  contentWrapper: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the dropzone overlay element if file is dragged over the document. */
  dropzoneOverlayDragOverDocument: string;
  /** Styles applied to the dropzone overlay element if file is dragged over. */
  dropzoneOverlayDragOver: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the icon wrapper element. */
  icon: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the headingText element. */
  headingText: string;
  /** Styles applied to the subheading element. */
  subheading: string;
};

export type DropzoneOverlayClassKey = keyof DropzoneOverlayClasses;

export function getDropzoneOverlayUtilityClass(slot: string): string {
  return generateUtilityClass('ESDropzoneOverlay', slot);
}

export const dropzoneOverlayClasses: DropzoneOverlayClasses = generateUtilityClasses('ESDropzoneOverlay', [
  'root',
  'contentWrapper',
  'content',
  'dropzoneOverlayDragOverDocument',
  'dropzoneOverlayDragOver',
  'input',
  'icon',
  'heading',
  'headingText',
  'subheading',
]);
