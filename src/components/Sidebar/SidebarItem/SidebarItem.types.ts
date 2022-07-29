/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { SidebarItemClasses } from './SidebarItem.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { OverrideProps } from '@mui/material/OverridableComponent';
export interface SidebarItemTypeMap<P = {}, D extends ElementType = 'div'> {
  props: P & {
    children?: ReactNode;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<SidebarItemClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The id of the element. */
    id?: string;
    /** Icon for the element. */
    icon?: ReactNode;
    /** Text for the element. */
    text?: ReactNode;
    /** Callback fired when user click. */
    onClick?: () => void;
    /** Callback fired when the mouse enters an element. */
    onMouseEnter?: () => void;
    /** Callback fired when one or more touch points are placed on the touch surface. */
    onTouchStart?: () => void;
  };
  defaultComponent: D;
}

export type SidebarItemProps<
  D extends React.ElementType = SidebarItemTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<SidebarItemTypeMap<P, D>, D>;
