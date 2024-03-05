import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ButtonClasses = {
  /** Styles applied to the root element. */
  root: string;

  fullWidth: string;

  size16: string;
  size20: string;
  size24: string;
  size32: string;
  size40: string;
  size48: string;
  size56: string;

  variantText: string;
  variantOutlined: string;
  variantContained: string;

  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorSuccess: string;
  colorError: string;
  colorInfo: string;
  colorWarning: string;
  colorMonoA: string;
  colorMonoB: string;
  colorBlack: string;
  colorWhite: string;

  icon: string;
  startIcon: string;
  endIcon: string;
};
export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESButton', slot);
}

export const buttonClasses: ButtonClasses = generateUtilityClasses('ESButton', [
  'root',
  'fullWidth',
  'size16',
  'size20',
  'size24',
  'size32',
  'size40',
  'size48',
  'size56',
  'variantText',
  'variantOutlined',
  'variantContained',
  'colorPrimary',
  'colorSecondary',
  'colorTertiary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'colorMonoA',
  'colorMonoB',
  'colorBlack',
  'colorWhite',
  'icon',
  'startIcon',
  'endIcon'
]);
