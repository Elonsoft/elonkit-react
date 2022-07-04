import { ReactNode } from 'react';

import { SFSClasses } from './SFS.classes';

import { SxProps, Theme } from '@mui/material';

export interface SFSProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
