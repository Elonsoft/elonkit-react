import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SwiperPaginationClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if direction='horizontal'. */
  horizontal: string;
  /** Styles applied to the root element if direction='vertical'. */
  vertical: string;
  /** Styles applied to the root element if position='start'. */
  start: string;
  /** Styles applied to the root element if position='end'. */
  end: string;
  /** Styles applied to the root element if variant='small'. */
  small: string;
  /** Styles applied to the root element if variant='long'. */
  long: string;
  /** Styles applied to the root element if variant='big'. */
  big: string;
  /** Styles applied to the item element. */
  item: string;
  /** Styles applied to the item element if it is active. */
  itemActive: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the bullet element. */
  bullet: string;
  /** Styles applied to the bullet element if it is active. */
  bulletActive: string;
  /** Styles applied to the bullet element if it is at the end of visible siblings. */
  bulletSmall: string;
};

export type SwiperPaginationClassKey = keyof SwiperPaginationClasses;

export function getSwiperPaginationUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwiperPagination', slot);
}

export const swiperPaginationClasses: SwiperPaginationClasses = generateUtilityClasses('ESSwiperPagination', [
  'root',
  'horizontal',
  'vertical',
  'start',
  'end',
  'small',
  'long',
  'big',
  'item',
  'itemActive',
  'input',
  'bullet',
  'bulletActive',
  'bulletSmall'
]);
