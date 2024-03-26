import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type RatingItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon wrapping elements. */
  icon: string;
  /** Styles applied to the icon wrapping elements when empty. */
  iconEmpty: string;
  /** Styles applied to the icon wrapping elements when filled. */
  iconFilled: string;
  /** Styles applied to the icon wrapping elements when hover. */
  iconHover: string;
  /** Styles applied to the icon wrapping elements when focus. */
  iconFocus: string;
  /** Styles applied to the icon wrapping elements when active. */
  iconActive: string;
  /** Visually hide an element. */
  visuallyHidden: string;
};

export type RatingItemClassKey = keyof RatingItemClasses;

export function getRatingItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESRatingItem', slot);
}

export const ratingItemClasses: RatingItemClasses = generateUtilityClasses('ESRatingItem', [
  'root',
  'icon',
  'iconEmpty',
  'iconFilled',
  'iconHover',
  'iconFocus',
  'iconActive',
  'visuallyHidden'
]);
