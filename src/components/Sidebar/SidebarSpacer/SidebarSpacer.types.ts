import { ReactNode } from 'react';

import { SidebarSpacerClasses } from './SidebarSpacer.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidebarSpacerProps {
  children?: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarSpacerClasses>;
  /** Class applied to the root element. */
  className?: string;
}
