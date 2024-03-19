import { ReactNode } from 'react';

import { RadioClasses } from './Radio.classes';

import { SxProps, Theme } from '@mui/material';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';

export interface RadioProps {
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
  classes?: Partial<RadioClasses>;

  /** Class applied to the root element. */
  className?: string;

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'monoA' | 'monoB' | 'black' | 'white';

  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'hybrid';

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
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name?: string;

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
   * `small` is equivalent to the dense Radio styling.
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: SwitchBaseProps['value'];
}
