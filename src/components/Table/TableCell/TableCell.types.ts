import { ReactNode } from 'react';

import { TableCellClasses } from './TableCell.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface TableCellProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableCellClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components. */
  variant?: 'head' | 'body';
  /**
   * The padding applied to the cell.
   * @default 'normal'
   */
  padding?: 'none' | 'normal' | 'checkbox';
  /** A non-negative integer value that indicates for how many columns the cell extends. */
  colSpan?: number;
  /** If true, the table cell will overlap it's row. */
  overlap?: boolean;
  /** If `true`, the table row divider is shown.
   * @default false
   */
  rowDivider?: boolean;
  /** If `true`, the table col divider is shown.
   * @default false
   */
  colDivider?: boolean;
  /**
   * Set the text-align on the table cell content.
   * @default 'flex-start'
   */
  align?: 'flex-start' | 'center' | 'flex-end';

  /** The id attribute passed to root element. */
  id?: string;

  /** Callback function that is fired when the cell's width changed. */
  onResize?: (width: number, element: HTMLElement) => void;
  /** Callback function that is fired when the cell's width finished changing. */
  onResizeCommit?: (width: number, element: HTMLElement) => void;
  /**
   * The minimum width of the cell for manual resizing.
   * @default 0
   */
  minWidth?: number;

  /** Text for the resize button aria-label. */
  labelResize?: string;
}
