import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type GridClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if container=true. */
  container: string;
  /** Styles applied to the root element if item=true. */
  item: string;
};

export type GridClassKey = keyof GridClasses;

export function getGridUtilityClass(slot: string): string {
  return generateUtilityClass('ESGrid', slot);
}

export const gridClasses: GridClasses = generateUtilityClasses('ESKbd', ['root', 'container', 'item']);
