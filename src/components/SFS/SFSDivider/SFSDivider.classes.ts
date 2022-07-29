import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSDividerClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type SFSDividerClassKey = keyof SFSDividerClasses;

export function getSFSDividerUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSDivider', slot);
}

export const sfsDividerClasses: SFSDividerClasses = generateUtilityClasses('ESSFSDivider', ['root']);
