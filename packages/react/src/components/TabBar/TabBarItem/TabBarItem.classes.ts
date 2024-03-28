import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TabBarItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** If true, the component is selected. */
  selected: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the label element. */
  label: string;
};

export type TabBarItemClassKey = keyof TabBarItemClasses;

export function getTabBarItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESTabBarItem', slot);
}

export const tabBarItemClasses: TabBarItemClasses = generateUtilityClasses('ESTabBarItem', [
  'root',
  'selected',
  'icon',
  'label'
]);
