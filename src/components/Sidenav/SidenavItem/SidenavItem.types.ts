import { ReactElement, ReactNode } from 'react';

import { SidenavItemClasses } from './SidenavItem.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SidenavItemProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidenavItemClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The id of the element. */
  id: string;
  /** Icon for the element. */
  icon?: ReactNode;
  /** Text for the element. */
  text?: ReactNode;
  /** The component used for the root. */
  component?: ReactElement;
  /** Callback fired when the element is clicked.*/
  onClick?: (id: string) => void;
}
