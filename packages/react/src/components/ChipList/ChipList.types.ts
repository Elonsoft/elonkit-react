import { ReactNode } from 'react';

import { ChipListClasses } from './ChipList.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface ChipListProps {
  /** Prop used for passing Chip components. */
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ChipListClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Prop used to control amount of visible lines.
   * @default 1
   */
  maxLines?: number;
}
