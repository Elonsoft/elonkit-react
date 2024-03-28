import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TabBarClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type TabBarClassKey = keyof TabBarClasses;

export function getTabBarUtilityClass(slot: string): string {
  return generateUtilityClass('ESTabBar', slot);
}

export const tabBarClasses: TabBarClasses = generateUtilityClasses('ESTabBar', ['root']);
