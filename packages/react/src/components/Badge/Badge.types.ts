/* eslint-disable @typescript-eslint/ban-types */

import { BadgeClasses } from './Badge.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface BadgePropsSizeOverrides {}

export interface BadgePropsColorOverrides {}

export interface BadgeTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & {
    /** Override or extend the styles applied to the component. */
    classes?: Partial<BadgeClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Class applied to the root element. */
    className?: string;

    /**
     * Badge size.
     * @default 24
     */
    size?: OverridableStringUnion<'6' | '8' | '12' | '14' | '16' | '20' | '24', BadgePropsSizeOverrides>;

    /**
     * Badge variant.
     * @default monoA
     */
    color?: OverridableStringUnion<
      'success' | 'warning' | 'error' | 'info' | 'secondary' | 'primary' | 'monoA' | 'monoB' | 'monoB500',
      BadgePropsColorOverrides
    >;

    /**
     * If `true`, the badge will appear clickable, even if the onClick prop is not defined. If `false`, the badge will not appear clickable, even if onClick prop is defined.
     * @default false
     */
    clickable?: boolean;
  };
  defaultComponent: D;
}

export type BadgeProps<D extends React.ElementType = BadgeTypeMap['defaultComponent'], P = {}> = OverrideProps<
  BadgeTypeMap<P, D>,
  D
>;
