import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type RatingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `readOnly={true}`. */
  readOnly?: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if keyboard focused. */
  focusVisible: string;
  /** Visually hide an element. */
  visuallyHidden?: string;
  /** Styles applied to the label elements. */
  label: string;
  /** Styles applied to the label of the "no value" input when it is active. */
  labelEmptyValueActive: string;
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
  /** Styles applied to the icon wrapping elements when decimals are necessary. */
  decimal: string;
};

export type RatingClassKey = keyof RatingClasses;

export function getRatingUtilityClass(slot: string): string {
  return generateUtilityClass('ESRating', slot);
}

export const ratingClasses: RatingClasses = generateUtilityClasses('ESRating', [
  'root',
  'readOnly',
  'disabled',
  'focusVisible',
  'visuallyHidden',
  'label',
  'labelEmptyValueActive',
  'icon',
  'iconEmpty',
  'iconFilled',
  'iconHover',
  'iconFocus',
  'iconActive',
  'decimal'
]);
