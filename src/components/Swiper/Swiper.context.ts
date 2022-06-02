import { createContext, useContext } from 'react';

import { SwiperDirection } from './Swiper.types';

export interface SwiperContextValue {
  /** The swiper direction. */
  direction: SwiperDirection;
  /** Index of active slide. */
  active: number;
  /** Start index for pagination. */
  from: number;
  /** End index for pagination. */
  to: number;
  /**
   * Scroll to the slide by its index.
   * @param index Index of the slide.
   */
  setActiveSlide: (index: number, options?: { smooth?: boolean }) => void;
  /**
   * Scroll container by the given number of slides.
   * @param step Number of slides.
   */
  setActiveSlideByStep: (step: number) => void;
}

export const SwiperContext = createContext<SwiperContextValue | null>(null);

export const useSwiperContext = () => {
  const value = useContext(SwiperContext);

  if (value === null) {
    throw new Error('No provider for SwiperContext.');
  }

  return value;
};
