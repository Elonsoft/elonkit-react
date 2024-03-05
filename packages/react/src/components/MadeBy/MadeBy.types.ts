/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { MadeByClasses } from './MadeBy.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface MadeByTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /** Override or extend the styles applied to the component. */
    classes?: Partial<MadeByClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Class applied to the root element. */
    className?: string;

    /**
     * If `true`, component will appear clickable, even if the onClick prop is not defined.
     * If `false`, component will not appear clickable, even if onClick prop is defined.
     * */
    clickable?: boolean;

    /**
     * Text to display.
     */
    text?: ReactNode;

    /**
     * Icon to display.
     */
    icon?: ReactNode;
  };
  defaultComponent: D;
}

export type MadeByProps<D extends React.ElementType = MadeByTypeMap['defaultComponent'], P = {}> = OverrideProps<
  MadeByTypeMap<P, D>,
  D
>;
