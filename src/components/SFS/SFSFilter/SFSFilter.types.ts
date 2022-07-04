import { ReactNode } from 'react';

import { SxProps, Theme } from '@mui/material';

export interface SFSFilterProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<any>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The content of the component.. */
  children: ReactNode;
}
