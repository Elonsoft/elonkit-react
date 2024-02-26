import { ReactNode } from 'react';

import { SFSRowClasses } from './SFSRow.classes';

import { SxProps, Theme } from '@mui/material';

export interface SFSRowProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSRowClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
