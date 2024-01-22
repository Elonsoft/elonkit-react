import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ErrorPageDescriptionClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ErrorPageDescriptionClassKey = keyof ErrorPageDescriptionClasses;

export function getErrorPageDescriptionUtilityClass(slot: string): string {
  return generateUtilityClass('ESErrorPageDescription', slot);
}

export const errorPageDescriptionClasses: ErrorPageDescriptionClasses = generateUtilityClasses(
  'ESErrorPageDescription',
  ['root']
);
