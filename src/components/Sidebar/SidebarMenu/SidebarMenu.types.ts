import { ReactNode } from 'react';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarMenuProps {
  children?: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * How item should be opened.
   * @default 'click'
   */
  behaviour?: 'click' | 'hover';
  /** If `true` other items close. */
  exclusive?: boolean;
}
