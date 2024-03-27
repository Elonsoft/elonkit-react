import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type EmptyStateClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if size="medium". */
  medium: string;
  /** Styles applied to the root element if size="small". */
  small: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the subheading element. */
  subheading: string;
  /** Styles applied to the children container element. */
  children: string;
};
export type EmptyStateClassKey = keyof EmptyStateClasses;

export function getEmptyStateUtilityClass(slot: string): string {
  return generateUtilityClass('ESEmptyState', slot);
}

export const emptyStateClasses: EmptyStateClasses = generateUtilityClasses('ESEmptyState', [
  'root',
  'medium',
  'small',
  'icon',
  'text',
  'heading',
  'subheading',
  'children'
]);
