import { ReactNode } from 'react';

import { SidebarScrollableClasses } from './SidebarScrollable.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarScrollableProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarScrollableClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Сontent before scrollbar. */
  beforeScroll?: ReactNode;
  /** Сontent after scrollbar. */
  afterScroll?: ReactNode;
}
