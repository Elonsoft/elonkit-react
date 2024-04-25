import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TypographyClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type TypographyClassKey = keyof TypographyClasses;

export function getTypographyUtilityClass(slot: string): string {
  return generateUtilityClass('ESTypography', slot);
}

export const typographyClasses: TypographyClasses = generateUtilityClasses('ESTypography', ['root']);
