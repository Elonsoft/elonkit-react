import { SidebarDividerClasses } from './SidebarDivider.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarDividerProps {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarDividerClasses>;
  /** Class applied to the root element. */
  className?: string;
}
