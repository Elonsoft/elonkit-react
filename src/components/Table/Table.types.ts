import { ReactNode } from 'react';

import { TableClasses } from './Table.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface TableProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The width of the columns. */
  columns: string[];
  /** If `true`, the table has zebra-striping variant.
   * @default false
   */
  striped?: boolean;
}
