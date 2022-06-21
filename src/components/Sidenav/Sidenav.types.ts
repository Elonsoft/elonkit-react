import { ReactNode } from 'react';

import { SidenavClasses } from './Sidenav.classes';

import { SxProps, Theme } from '@mui/material';

export interface SidenavProps {
  children?: [ReactNode, ReactNode];
  /** Override or extend the styles applied to the component. */
  sx?: SxProps<Theme>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  classes?: Partial<SidenavClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** If `true`, the component is shown. */
  open?: boolean;
  /** The id of the selected `SidenavItem`element. */
  id: string | null;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
}
