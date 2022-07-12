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

  /** The id attribute passed to root element. */
  id?: string;
}
