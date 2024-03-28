/* eslint-disable @typescript-eslint/ban-types */

import { ButtonClasses } from './Button.classes';

import { SxProps, Theme } from '@mui/material';
import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { ExtendButtonBaseTypeMap } from '../ButtonBase';

import { DistributiveOmit, OverridableStringUnion } from '@mui/types';

export interface ButtonPropsVariantOverrides {}

export interface ButtonPropsColorOverrides {}

export interface ButtonPropsSizeOverrides {}

export interface ButtonOwnProps {
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'monoA'
    | 'monoB'
    | 'black'
    | 'white',
    ButtonPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'16' | '20' | '24' | '32' | '40' | '48' | '56', ButtonPropsSizeOverrides>;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>;
}

export type ButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & ButtonOwnProps;
  defaultComponent: RootComponent;
}>;

/**
 * Utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonTypeMap<TypeMap extends OverridableTypeMap> {
  props: TypeMap['props'] &
    (TypeMap['props'] extends { classes?: Record<string, string> }
      ? DistributiveOmit<ButtonTypeMap['props'], 'classes'>
      : ButtonTypeMap['props']);
  defaultComponent: TypeMap['defaultComponent'];
}

export type ExtendButton<TypeMap extends OverridableTypeMap> = ((
  props: {} & OverrideProps<ExtendButtonBaseTypeMap<TypeMap>, 'button'>
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<TypeMap>>;
