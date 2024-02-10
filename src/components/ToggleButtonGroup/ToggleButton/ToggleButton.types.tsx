/* eslint-disable @typescript-eslint/ban-types */

import { ToggleButtonClasses } from './ToggleButton.classes';

import { SxProps, Theme } from '@mui/material';
import { ButtonClasses, ExtendButtonTypeMap } from '@mui/material/Button';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface ToggleButtonOwnProps {
  value: string;
  /**
   * The color of the button when it is in an active state. It supports both default and custom theme colors
   * @default 'standard'
   */
  //children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ButtonClasses> & ToggleButtonClasses;
  /** Class applied to the root element. */
  //className?: string;
  /**
   * If true, the component is disabled.
   * @default false
   */
  //disabled?: boolean;
  /** Callback fired when the state changes. */
  //onChange?: (event: React.FormEvent<HTMLButtonElement>, value: any) => void;
  /** Callback fired when the state changes. */
  onClick?: (event: React.MouseEvent, value: any) => void;
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
  RootComponent extends React.ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: AdditionalProps & ToggleButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type ToggleButtonProps<
  RootComponent extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<ToggleButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
