import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SwiperButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if step < 0. */
  prev: string;
  /** Styles applied to the root element if step > 0. */
  next: string;
  /** Styles applied to the root element if Swiper's direction is 'horizontal'. */
  horizontal: string;
  /** Styles applied to the root element if Swiper's direction is 'vertical'. */
  vertical: string;
};

export type SwiperButtonClassKey = keyof SwiperButtonClasses;

export function getSwiperButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwiperButton', slot);
}

export const swiperButtonClasses: SwiperButtonClasses = generateUtilityClasses('ESSwiperButton', [
  'root',
  'prev',
  'next',
  'horizontal',
  'vertical'
]);
