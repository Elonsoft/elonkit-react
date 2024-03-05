/* eslint-disable @typescript-eslint/ban-types */

import { ButtonBaseClasses } from './ButtonBase.classes';

import { SxProps, Theme } from '@mui/material';
import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { TouchRippleParams } from '../TouchRipple';

export interface ButtonBaseOwnProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ButtonBaseClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** If true, the touch ripple effect is disabled. */
  disableTouchRipple?: boolean;
  /** Props applied to the touch ripple component. */
  TouchRippleProps?: Partial<Pick<TouchRippleParams, 'center' | 'pressGrowDuration' | 'minimumPressDuration'>>;
}

export interface ButtonBaseTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'button'> {
  props: AdditionalProps & ButtonBaseOwnProps;
  defaultComponent: RootComponent;
}

export interface ExtendButtonBaseTypeMap<TypeMap extends OverridableTypeMap> {
  props: TypeMap['props'] & Omit<ButtonBaseTypeMap['props'], 'classes'>;
  defaultComponent: TypeMap['defaultComponent'];
}

export type ExtendButtonBase<TypeMap extends OverridableTypeMap> = ((
  props: {} & OverrideProps<ExtendButtonBaseTypeMap<TypeMap>, 'button'>
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<TypeMap>>;

export type ButtonBaseProps<
  RootComponent extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<ButtonBaseTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};
