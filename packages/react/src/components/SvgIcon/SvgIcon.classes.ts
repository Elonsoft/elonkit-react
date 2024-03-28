import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SvgIconClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the svg element. */
  svg: string;
};

export type SvgIconClassKey = keyof SvgIconClasses;

export function getSvgIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESSvgIcon', slot);
}

export const svgIconClasses: SvgIconClasses = generateUtilityClasses('ESSvgIcon', ['root', 'svg']);
