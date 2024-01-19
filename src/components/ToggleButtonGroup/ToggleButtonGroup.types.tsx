import { ReactNode } from 'react';

import { ToggleButtonGroupClasses } from './ToggleButtonGroup.classes';

import { Breakpoint, SxProps, Theme } from '@mui/material';

export interface ToggleButtonGroupProps {
  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  breakpoint?: number | Breakpoint;
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ToggleButtonGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the keyboard focus ripple is disabled.
   * @default false
   */
  exclusive?: boolean;
  /** Callback fired when the state changes. */
  onChange?: (event: React.MouseEvent, value: any) => void;
  /**
   * The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * The currently selected value within the group or an array of selected values when exclusive is false.
     The value must have reference equality with the option in order to be selected.
   */
  value?: any; //any
  /** Styles applied to the first button in the toggle button group. */
}
