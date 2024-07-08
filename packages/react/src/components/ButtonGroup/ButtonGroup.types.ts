import { ReactNode } from 'react';

import {
  ButtonPropsColorOverrides,
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
} from '../Button/Button.types';

import { ButtonGroupClasses } from './ButtonGroup.classes';

import { SxProps, Theme } from '@mui/material';

import { OverridableStringUnion } from '@mui/types';

export interface ButtonGroupProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'monoA' | 'monoB' | 'black' | 'white',
    ButtonPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple?: boolean;
  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * @default '500'
   */
  size?: OverridableStringUnion<'200' | '300' | '400' | '500' | '600' | '700', ButtonPropsSizeOverrides>;
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: OverridableStringUnion<'outlined' | 'contained', ButtonPropsVariantOverrides>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}
