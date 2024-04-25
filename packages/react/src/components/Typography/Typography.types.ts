/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { TypographyClasses } from './Typography.classes';

import { Breakpoint, Theme } from '@mui/material/styles';
import { SxProps, SystemProps } from '@mui/system';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface TypographyPropsVariantOverrides {}

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body400'
  | 'body400Medium'
  | 'body400Bold'
  | 'body300'
  | 'body300Medium'
  | 'body300Bold'
  | 'body200'
  | 'body200Medium'
  | 'body200Bold'
  | 'body100'
  | 'body100Medium'
  | 'body100Bold'
  | 'captionMedium'
  | 'captionBold'
  | 'mini200'
  | 'mini100'
  | 'mini100Bold'
  | 'micro'
  | 'caption'
  | 'button'
  | 'overline';

export type TypographyVariant = OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;

export interface TypographyOwnProps extends SystemProps<Theme> {
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TypographyClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?: TypographyVariant | Record<number | Breakpoint, TypographyVariant>;
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping?: Partial<Record<TypographyVariant, string>>;
}

export interface TypographyTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'span'> {
  props: AdditionalProps & TypographyOwnProps;
  defaultComponent: RootComponent;
}

export type TypographyProps<
  RootComponent extends React.ElementType = TypographyTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<TypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};
