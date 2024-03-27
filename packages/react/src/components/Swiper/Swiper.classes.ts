import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SwiperClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element if direction='horizontal'. */
  horizontal: string;
  /** Styles applied to the button element if direction='vertical'. */
  vertical: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the container element if snap='true'. */
  containerSnap: string;
  /** Styles applied to the container element if snap=true and alignment='center'. */
  containerSnapAlignCenter: string;
  /** Styles applied to the container element if snap=true and alignment='start'. */
  containerSnapAlignStart: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the prev button element. */
  buttonPrev: string;
  /** Styles applied to the next button element. */
  buttonNext: string;
};
export type SwiperClassKey = keyof SwiperClasses;

export function getSwiperUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwiper', slot);
}

export const swiperClasses: SwiperClasses = generateUtilityClasses('ESSwiper', [
  'root',
  'horizontal',
  'vertical',
  'wrapper',
  'container',
  'containerSnap',
  'containerSnapAlignCenter',
  'containerSnapAlignStart',
  'button',
  'buttonPrev',
  'buttonNext'
]);
