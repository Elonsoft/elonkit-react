/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { LinkClasses } from './Link.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';
import { TypographyProps } from '@mui/material/Typography';

export interface LinkOwnProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<LinkClasses>;
  /**
   * The color of the link.
   * @default 'common.link'
   */
  color?: TypographyProps['color'];
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Element placed before the children. */
  startIcon?: ReactNode;
  /** Element placed after the children. */
  endIcon?: ReactNode;
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline?: 'none' | 'hover' | 'always';
  /** Whether the link should show visited state. */
  showVisited?: boolean;
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant?: TypographyProps['variant'];
}

export interface LinkTypeMap<P = {}, D extends React.ElementType = 'a'> {
  props: P & LinkOwnProps;
  defaultComponent: D;
}

export type LinkProps<D extends React.ElementType = LinkTypeMap['defaultComponent'], P = {}> = OverrideProps<
  LinkTypeMap<P, D>,
  D
>;
