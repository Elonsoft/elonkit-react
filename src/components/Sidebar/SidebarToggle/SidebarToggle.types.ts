import { ReactNode } from 'react';

import { SidebarToggleClasses } from './SidebarToggle.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarToggleProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarToggleClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** Sidebar avatar. */
  icon?: ReactNode;
  /** Text for the button aria-label. */
  labelOpen?: string;
  /** Text for the button aria-label. */
  labelHide?: string;
  /** Callback fired when the button is clicked. */
  onClick?: () => void;
}
