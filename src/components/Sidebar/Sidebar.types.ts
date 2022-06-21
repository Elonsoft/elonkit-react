import { ReactNode } from 'react';

import { SidebarClasses } from './Sidebar.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary';
  /** The width of the component. */
  width?: number;
  /** Callback fired when the width has been changed. */
  onWidthChange?: (width: number) => void;
}
