import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type CheckboxClasses = {
  /** Class name applied to the root element. */
  root: string;
  /** State class applied to the root element if `checked={true}`. */
  checked: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `error={true}`. */
  error: string;
  /** State class applied to the root element if `indeterminate={true}`. */
  indeterminate: string;
  /** State class applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** State class applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** State class applied to the root element if `color="monoA"`. */
  colorMonoA: string;
  /** State class applied to the root element if `color="monoB"`. */
  colorMonoB: string;
  /** State class applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the root element if `color="error"`. */
  colorError: string;
  /** State class applied to the root element if `color="info"`. */
  colorInfo: string;
  /** State class applied to the root element if `color="black"`. */
  colorBlack: string;
  /** State class applied to the root element if `color="white"`. */
  colorWhite: string;
  /** State class applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** State class applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** State class applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** State class applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** State class applied to the root element if `variant = "contained"`. */
  variantContained: string;
  /** State class applied to the root element if `variant = "outlined"`. */
  variantOutlined: string;
  /** State class applied to the root element if `variant = "hybrid"`. */
  variantHybrid: string;
};
export type CheckboxClassKey = keyof CheckboxClasses;

export function getCheckboxUtilityClass(slot: string): string {
  return generateUtilityClass('ESCheckbox', slot);
}

export const checkboxClasses: CheckboxClasses = generateUtilityClasses('ESCheckbox', [
  'root',
  'checked',
  'disabled',
  'error',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'colorMonoA',
  'colorMonoB',
  'colorWarning',
  'colorError',
  'colorSuccess',
  'colorInfo',
  'colorBlack',
  'colorWhite',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge',
  'variantContained',
  'variantOutlined',
  'variantHybrid'
]);
