import { ElementType, HTMLAttributes, ReactNode, RefObject, SyntheticEvent } from 'react';

import { TabScrollButtonProps } from './TabScrollButton/TabScrollButton.types';

import { TabsClasses } from './Tabs.classes';

import { SxProps, Theme } from '@mui/material';

export type TabIndicatorSlidingAnimation =
  | 'expandFromCenter'
  | 'shortest'
  | 'shorter'
  | 'short'
  | 'standard'
  | 'complex'
  | 'enteringScreen'
  | 'leavingScreen';

export type TabsProps = {
  customAnimation?: {
    duration?: number | string;
    easing?: string;
    delay?: string | number;
  };
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action?: RefObject<{ updateIndicator: () => void; updateScrollButtons: () => void }>;
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile?: boolean;
  /**
   * The label for the Tabs as a string.
   */
  'aria-label'?: string;
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  'aria-labelledby'?: string;
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered?: boolean;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabsClasses>;
  /**
   * @ignore
   */
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * The transition used for TabIndicator sliding between Tabs.
   *
   * @default none
   */
  TabIndicatorSlidingAnimation?: TabIndicatorSlidingAnimation;
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor?: 'primary' | 'secondary';
  /**
   * Callback fired when the value changes.
   *
   * @param {SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange?: (event: SyntheticEvent, value: any) => void;
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent?: ElementType;
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons?: 'auto' | boolean;
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus?: boolean;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    StartScrollButtonIcon?: ElementType;
    EndScrollButtonIcon?: ElementType;
  };
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * If 'true' each nested Tab component will be smaller and have rounded corners.
   */
  rounded?: boolean;
  /**
   * Determines horizontal alignment of TabIndicator component:
   *
   *  - `left` TabIndicator will be at the left side of Tab.
   *  - `center` TabIndicator will be at the center of the Tab.
   *  - `right` TabIndicator will be at the right side of the Tab.
   * @default 'left'
   */
  TabIndicatorAlignment?: 'left' | 'center' | 'right';
  /**
   * Determines position of TabIndicator component:
   *
   *  - `top` TabIndicator will be at the top of the Tab.
   *  - `bottom` TabIndicator will be at the bottom of the Tab.
   * @default 'bottom'
   */
  TabIndicatorPosition?: 'top' | 'bottom';
  /**
   /**
    * Props applied to the tab indicator element.
    * @default  {}
   */
  TabIndicatorProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * Determines width of TabIndicator relative to the current Tab. Cannot exceed Tab width.
   * Value should be a string containg width either in pixels or in percentage.
   * @default '100%'
   */
  TabIndicatorWidth?: string;
  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps?: Partial<TabScrollButtonProps>;
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value?: any;
  /**
   *  Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant?: 'fullWidth' | 'scrollable' | 'standard';
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar?: boolean;
};
