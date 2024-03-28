import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DialogClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the wrapper element if align='center'. */
  wrapperAlignCenter: string;
  /** Styles applied to the wrapper element if align='flex-start'. */
  wrapperAlignFlexStart: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the content element if fullWidth=true. */
  contentFullWidth: string;
  /** Styles applied to the content element if fullScreen=true. */
  contentFullScreen: string;
  /** Styles applied to the paper element. */
  paper: string;
  /** Styles applied to the root element if fullScreen=true. */
  paperFullScreen: string;
};
export type DialogClassKey = keyof DialogClasses;

export function getDialogUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialog', slot);
}

export const dialogClasses: DialogClasses = generateUtilityClasses('ESDialog', [
  'root',
  'container',
  'wrapper',
  'wrapperAlignCenter',
  'wrapperAlignFlexStart',
  'content',
  'contentFullWidth',
  'contentFullScreen',
  'paper',
  'paperFullScreen'
]);
