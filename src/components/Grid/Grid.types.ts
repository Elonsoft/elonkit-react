import { ReactNode } from 'react';

import { GridClasses } from './Grid.classes';

import { SxProps, Theme } from '@mui/material/styles';

import { GridContainerMixinProps } from './../../theming/mixins/gridContainer';
import { GridItemMixinProps } from './../../theming/mixins/gridItem';

export type GridProps = {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GridClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container?: boolean;

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item?: boolean;
} & GridItemMixinProps &
  GridContainerMixinProps;
