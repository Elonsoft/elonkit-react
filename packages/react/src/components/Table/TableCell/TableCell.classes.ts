import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableCellClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant="head". */
  head: string;
  /** Styles applied to the root element if variant="body". */
  body: string;
  /** Styles applied to the root element if padding="none". */
  paddingNone: string;
  /** Styles applied to the root element if padding="normal". */
  paddingNormal: string;
  /** Styles applied to the root element if padding="checkbox". */
  paddingCheckbox: string;
  /** Styles applied to the root element if pin="left". */
  pinLeft: string;
  /** Styles applied to the root element if pin="right". */
  pinRight: string;
  /** Styles applied to the root element if overlap="true". */
  overlap: string;
  /** Styles applied to the root element if cell is resizing. */
  resizing: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the content element if align="flex-start". */
  contentAlignFlexStart: string;
  /** Styles applied to the content element if align="center". */
  contentAlignCenter: string;
  /** Styles applied to the content element if align="flex-end". */
  contentAlignFlexEnd: string;
  /** Styles applied to the resize element. */
  resize: string;
  /** Styles applied to the resize element if cell is resizing. */
  resizeResizing: string;
};
export type TableCellClassKey = keyof TableCellClasses;

export function getTableCellUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableCell', slot);
}

export const tableCellClasses: TableCellClasses = generateUtilityClasses('ESTableCell', [
  'root',
  'head',
  'body',
  'paddingNone',
  'paddingNormal',
  'paddingCheckbox',
  'pinLeft',
  'pinRight',
  'overlap',
  'resizing',
  'container',
  'content',
  'contentAlignFlexStart',
  'contentAlignCenter',
  'contentAlignFlexEnd',
  'resize',
  'resizeResizing'
]);
