import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSFiltersClasses = {
  /** Styled applied to the root element. */
  root: string;
  /** Styles applied to the open button. */
  button: string;
  /** Styles applied to the open button badge. */
  buttonBadge: string;
  /** Styles applied to the root drawer element. */
  drawer: string;
  /** Styles applied to the header element. */
  header: string;
  /** Styles applied to the footer element. */
  footer: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the close button. */
  closeButton: string;
  /** Styles applied to the reset button. */
  resetButton: string;
};

export type SFSFiltersClassKey = keyof SFSFiltersClasses;

export function getSFSFiltersUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSFilters', slot);
}

export const sfsFiltersClasses: SFSFiltersClasses = generateUtilityClasses('ESSFSFilters', [
  'root',
  'button',
  'buttonBadge',
  'drawer',
  'header',
  'footer',
  'container',
  'closeButton',
  'resetButton'
]);
