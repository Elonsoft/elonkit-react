import React, { ReactNode, Ref } from 'react';

import { SwiperClasses } from './Swiper.classes';

import { SxProps, Theme } from '@mui/material/styles';

export type SwiperDirection = 'horizontal' | 'vertical';
export type SwiperAlignment = 'center' | 'start';

export interface SwiperImperativeActions {
  /** Set active slide by its index. */
  setActiveSlide: (index: number, options?: { smooth?: boolean }) => void;
}

export interface SwiperProps {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;

  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SwiperClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The swiper direction.
   * @default 'horizontal'
   */
  direction?: SwiperDirection;

  /**
   * Alignment of the slides.
   * @default 'center'
   */
  alignment?: SwiperAlignment;

  /**
   * The gap between slides.
   * @default 16
   */
  gap?: number;

  /** Whether CSS Scroll Snap is enabled. */
  snap?: boolean;
  /** Whether the swiper can be scrolled by mouse drag. Not working well with snap mode. */
  draggable?: boolean;
  /** Whether the loop mode is enabled and the interval between slides change. */
  loop?: number;

  /**
   * Slides count to loop.
   * @default 1
   */
  loopCount?: number;

  /** A ref for imperative actions. */
  actions?: Ref<SwiperImperativeActions>;

  /** Callback fired when active slide (closest to the center) changes. */
  onActiveSlideChange?: (index: number) => void;
  /** Callback fired when pagination range changes. */
  onPaginationRangeChange?: (from: number, to: number) => void;

  /** The component used for the prev button. */
  buttonPrev?: React.ReactNode | null;
  /** The component used for the next button. */
  buttonNext?: React.ReactNode | null;
  /** The component used for the pagination. */
  pagination?: React.ReactNode | null;
}
