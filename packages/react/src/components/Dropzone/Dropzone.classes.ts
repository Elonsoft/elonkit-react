import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DropzoneClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the dropzone element. */
  dropzone: string;
  /** Styles applied to the dropzone element if file is dragged over the document. */
  dropzoneDragOverDocument: string;
  /** Styles applied to the dropzone element if file is dragged over. */
  dropzoneDragOver: string;
  /** Styles applied to the dropzone element if `error={true}`. */
  dropzoneError: string;
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
  /** Styles applied to the helperText element. */
  helperText: string;
  /** Styles applied to the helperText element if `error={true}`. */
  helperTextError: string;
};

export type DropzoneClassKey = keyof DropzoneClasses;

export function getDropzoneUtilityClass(slot: string): string {
  return generateUtilityClass('ESDropzone', slot);
}

export const dropzoneClasses: DropzoneClasses = generateUtilityClasses('ESDropzone', [
  'root',
  'dropzone',
  'dropzoneDragOverDocument',
  'dropzoneDragOver',
  'dropzoneError',
  'input',
  'icon',
  'heading',
  'headingText',
  'subheading',
  'helperText',
  'helperTextError'
]);
