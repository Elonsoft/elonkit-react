import { FocusEvent, MouseEvent, ReactElement, ReactNode } from 'react';

import { TabClasses } from './Tab.classes';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export type TabProps = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children?: null;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabClasses>;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple?: boolean;
  /**
   * The icon to display.
   */
  icon?: string | ReactElement;
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /**
   * The label element.
   */
  label?: ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value?: any;
  /**
   * Determines additional display behavior of the tab:
   *
   *  - `default` will make tab corners and tab height standard.
   *  - `rounded` will make the tab corners rounded and make tab height less.
   * @default 'default'
   */
  variant?: 'default' | 'rounded';
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped?: boolean;
  /**
   * CSS class to be applied to the root element of the component.
   */
  className?: string;
  /**
   * The indicator element for the current tab.
   */
  indicator?: ReactElement;
  /**
   * If `true`, the component will take up the full available width.
   */
  fullWidth?: boolean;
  /**
   * Event handler for tab selection change. Accepts parameters: event and tab value.
   */
  onChange?: (event: MouseEvent | FocusEvent, value: any) => void;
  /**
   * Event handler for tab click. Accepts parameter: click event.
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Event handler for tab focus. Accepts parameter: focus event.
   */
  onFocus?: (event: FocusEvent) => void;
  /**
   * Determines whether the tab should be selected when focused. If `true`, selection will change when the tab is focused.
   */
  selectionFollowsFocus?: boolean;
  /**
   * If `true`, the tab will be selected.
   */
  selected?: boolean;
  /**
   * Text color of the tab. Can be `'inherit'`, `'primary'`, or `'secondary'`.
   */
  textColor?: 'inherit' | 'primary' | 'secondary';
};
