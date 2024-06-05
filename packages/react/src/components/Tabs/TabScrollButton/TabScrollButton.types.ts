import { ReactNode } from 'react';

import { TabScrollButtonClasses } from './TabScrollButton.classes';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export interface TabScrollButtonProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabScrollButtonClasses>;
  /**
   * The CSS class applied to the root element.
   */
  className?: string;
  /**
   * The direction the button should indicate.
   */
  direction: 'left' | 'right';
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The height of the list of tabs.
   */
  tabListHeight?: number;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    StartScrollButtonIcon?: ReactNode;
    EndScrollButtonIcon?: ReactNode;
  };
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}
