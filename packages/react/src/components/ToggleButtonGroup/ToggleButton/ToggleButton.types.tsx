/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { ToggleButtonClasses } from './ToggleButton.classes';

import { SxProps, Theme } from '@mui/material';
import { ButtonClasses, ExtendButtonTypeMap } from '@mui/material/Button';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface ToggleButtonPropsSizeOverrides {}

export interface ToggleButtonOwnProps {
  value: string;
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ButtonClasses> & ToggleButtonClasses;
  /** Class applied to the root element. */
  className?: string;
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /** Callback fired when the state changes. */
  onChange?: (event: React.FormEvent<HTMLButtonElement>, value: any) => void;
  /** Callback fired when the button clicked. */
  onClick?: (event: React.MouseEvent, value: any) => void;
  /**
   * The size of the component.
   * @default '40'
   */
  size?: OverridableStringUnion<'16' | '20' | '24' | '32' | '40' | '48' | '56', ToggleButtonPropsSizeOverrides>;
  /**
   * If true, the button is rendered in an active state.
   * @default false
   */
  selected?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}

export type ToggleButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonTypeMap<{
  props: AdditionalProps & ToggleButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type ToggleButtonProps<
  RootComponent extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<ToggleButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
