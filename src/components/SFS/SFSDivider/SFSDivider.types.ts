import { SFSDividerClasses } from './SFSDivider.classes';

import { SxProps, Theme } from '@mui/material';

export interface SFSDividerProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSDividerClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** If true, element will be hidden on tabletXS breakpoint. */
  hideOnTabletXSBreakpoint?: boolean;
}
