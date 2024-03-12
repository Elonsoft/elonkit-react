import { ReactNode } from 'react';

import { CheckboxClasses } from './Checkbox.classes';

import { SxProps, Theme } from '@mui/material';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';

export interface CheckboxProps {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CheckboxClasses>;

  /** Class applied to the root element. */
  className?: string;

  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'monoA';

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;

  /**
   * The icon to display when the component is unchecked.
  
   */
  icon?: ReactNode;

  /**
   * The id of the `input` element.
   */
  id?: string;

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon?: ReactNode;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: SwitchBaseProps['inputProps'];

  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: SwitchBaseProps['value'];
}
