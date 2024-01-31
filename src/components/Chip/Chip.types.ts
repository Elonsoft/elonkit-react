/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { ChipClasses } from './Chip.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface ChipPropsSizeOverrides {}

export interface ChipPropsVariantOverrides {}

export interface ChipPropsSelectedColorOverrides {}

export interface ChipTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    children?: ReactNode;
    component?: ElementType;

    /** Class applied to the root element. */
    className?: string;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<ChipClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;

    /**
     * The size of the component.
     * @default '24'
     */
    size?: OverridableStringUnion<'24' | '32' | '40', ChipPropsSizeOverrides>;

    /**
     * The variant to use.
     * @default 'filled'
     */
    variant?: OverridableStringUnion<'filled' | 'outlined', ChipPropsVariantOverrides>;

    /** If `true`, the component is disabled. */
    disabled?: boolean;

    /** If `true`, the component is selected. */
    selected?: boolean;

    /**
     * The color of the selected component.
     * @default 'default'
     */
    selectedColor?: OverridableStringUnion<'default' | 'colored', ChipPropsSelectedColorOverrides>;

    /** If `true`, the chip will appear clickable, even if the onClick prop is not defined. If `false`, the chip will not appear clickable, even if onClick prop is defined. */
    clickable?: boolean;
    /** If `true`, allows the disabled chip to receive focus. */
    focusableWhenDisabled?: boolean;

    /** Element placed before the children. */
    startIcon?: ReactNode;
    /** Element placed after the children. */
    endIcon?: ReactNode;

    /** Callback fired when the delete icon is clicked. If set, the delete icon will be shown. */
    onDelete?: () => void;
    onClick?: () => void;

    /** Icon for the delete button. */
    iconDelete?: ReactNode;
  };
  defaultComponent: D;
}

export type ChipProps<D extends React.ElementType = ChipTypeMap['defaultComponent'], P = {}> = OverrideProps<
  ChipTypeMap<P, D>,
  D
>;
