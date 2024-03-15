import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type RadioClasses = {
  /** Class name applied to the root element. */
  root: string;
  /** State class applied to the root element if `checked={true}`. */
  checked: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** State class applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** State class applied to the root element if `color="monoA"`. */
  colorMonoA: string;
  /** State class applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the root element if `color="error"`. */
  colorError: string;
  /** State class applied to the root element if `color="info"`. */
  colorInfo: string;
  /** State class applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** State class applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** State class applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** State class applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** State class applied to the root element if `variant = "filled"`. */
  variantFilled: string;
  /** State class applied to the root element if `variant = "outlined"`. */
  variantOutlined: string;
  /** State class applied to the root element if `variant = "hybrid"`. */
  variantHybrid: string;
};
export type RadioClassKey = keyof RadioClasses;

export function getRadioUtilityClass(slot: string): string {
  return generateUtilityClass('ESRadio', slot);
}

export const radioClasses: RadioClasses = generateUtilityClasses('ESRadio', [
  'root',
  'checked',
  'disabled',
  'colorPrimary',
  'colorSecondary',
  'colorMonoA',
  'colorWarning',
  'colorError',
  'colorSuccess',
  'colorInfo',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge',
  'variantFilled',
  'variantOutlined',
  'variantHybrid'
]);
