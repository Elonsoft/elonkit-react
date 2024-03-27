import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DividerClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: string;
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: string;
  /** Styles applied to the root element if `textAlign="center"`. */
  textAlignCenter: string;
  /** Styles applied to the root element if `textAlign="start"`. */
  textAlignStart: string;
  /** Styles applied to the root element if `textAlign="end"`. */
  textAlignEnd: string;
  /** Styles applied to the root element if `flexItem=true`. */
  flexItem: string;
  /** Styles applied to the root element if divider have text. */
  withChildren: string;
  /** Styles applied to the span children wrapper element. */
  wrapper: string;
};
export type DividerClassKey = keyof DividerClasses;

export function getDividerUtilityClass(slot: string): string {
  return generateUtilityClass('ESDivider', slot);
}

export const dividerClasses: DividerClasses = generateUtilityClasses('ESDivider', [
  'root',
  'vertical',
  'horizontal',
  'textAlignCenter',
  'textAlignStart',
  'textAlignEnd',
  'flexItem',
  'withChildren',
  'wrapper'
]);
