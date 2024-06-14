import { ForwardedRef, ReactNode } from 'react';

import { AutocompleteMenuClasses } from './AutocompleteMenu.classes';

import { PopperProps, SxProps, TextFieldProps, Theme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { MenuGroupProps } from '../MenuGroup';

export type AutocompleteMenuProps<T> = {
  paperRef?: ForwardedRef<HTMLDivElement>;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteMenuClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container?: HTMLElement;

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: PopperProps['anchorEl'];

  /** If `true`, the component is shown. */
  open: boolean;

  /** The width of the menu. */
  width?: number | string;
  /** The offset from anchor element. */
  offset?: [number, number];

  /** Array of the options. */
  options: T[];
  /** Used to determine the value for a given option. It's used for options comparison. */
  getOptionValue: (option: T) => number | string;
  /** Used to determine the display value for a given option. It's used to fill the input and the list box options. */
  getOptionLabel: (option: T) => ReactNode;
  /** Used to determine the disabled state for a given option. */
  getOptionDisabled?: (option: T) => boolean;

  /** If provided, the options will be grouped under the returned value. */
  groupBy?: (option: T) => number | string;

  /** If true, the component is in a loading state. This shows the labelLoading in place of options (only if options are empty). */
  loading?: boolean;
  /** Children content for the menu header. */
  header?: ReactNode;
  /** Children content for the menu footer. */
  footer?: ReactNode;

  /** Callback fired when the menu requests to be closed. */
  onClose?: (event: unknown, reason: 'escapeKeyDown' | 'clickAway') => void;
  /** Callback fired when the menu list is scrolled to the end. */
  onLoadMore?: () => void;

  /** Props applied to the popper component. */
  PopperProps?: Omit<Partial<PopperProps>, 'anchorEl' | 'open'>;
  /** Props applied to the search field component. If present, shows the component. */
  SearchProps?: Partial<TextFieldProps>;
  /** Props applied to the MenuGroup components. */
  MenuGroupProps?: Partial<MenuGroupProps>;

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration?: TransitionProps['timeout'] | 'auto';
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps?: TransitionProps;

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus?: boolean;

  /** If `true`, the modal will not prevent focus from leaving the modal while open. */
  disableEnforceFocus?: boolean;
  /** If `true`, hitting escape will not fire the `onClose` callback. */
  disableEscapeKeyDown?: boolean;
  /** If `true`, the modal will not restore focus to previously focused element once modal is hidden or unmounted. */
  disableRestoreFocus?: boolean;
  /** Disable the scroll lock behavior. */
  disableScrollLock?: boolean;

  /** Text for the empty state. */
  labelNoOptions?: ReactNode;
  /** Text for the empty state when search value is not empty. */
  labelNoMatches?: ReactNode;
  /** Text for the loading state. */
  labelLoading?: ReactNode;
  /** Text for the search field placeholder. */
  labelSearch?: string;
  /** Text for the search field clear button aria-label. */
  labelSearchClear?: string;

  /** Icon for the search field startAdornment. */
  iconSearch?: ReactNode;
  /** Icon for the search field clear button. */
  iconSearchClear?: ReactNode;
} & (
  | {
      multiple?: false;
      value: T | null;
      onChange?: (value: T | null) => void;
    }
  | {
      multiple: true;
      value: T[];
      onChange?: (value: T[]) => void;
    }
);
