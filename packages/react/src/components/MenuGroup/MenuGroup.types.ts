import { ReactNode } from 'react';

import { MenuGroupClasses } from './MenuGroup.classes';

import { SxProps, Theme } from '@mui/material';

export interface MenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<MenuGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  size?: '32' | '28' | '24';
  sticky?: boolean;
  divider?: boolean;
}
