import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TabsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the flex container element. */
  flexContainer: string;
  /** Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
  centered: string;
  /** Styles applied to the tablist element. */
  scroller: string;
  /** Styles applied to the tablist element if `!variant="scrollable"`. */
  fixed: string;
  /** Styles applied to the tablist element if `variant="scrollable"` and `orientation="horizontal"`. */
  scrollableX: string;
  /** Styles applied to the tablist element if `variant="scrollable"` and `visibleScrollbar={false}`. */
  hideScrollbar: string;
  /** Styles applied to the ScrollButtonComponent component. */
  scrollButtons: string;
  /** Styles applied to the ScrollButtonComponent component if `allowScrollButtonsMobile={true}`. */
  scrollButtonsHideMobile: string;
  /** Styles applied to the divider element under the tabs. */
  tabsDivider: string;
  /** Styles applied to the TabIndicator component. */
  indicator: string;
};

export type TabsClassKey = keyof TabsClasses;

export function getTabsUtilityClass(slot: string) {
  return generateUtilityClass('ESTabs', slot);
}

export const tabsClasses: TabsClasses = generateUtilityClasses('ESTabs', [
  'root',
  'flexContainer',
  'centered',
  'scroller',
  'fixed',
  'scrollableX',
  'hideScrollbar',
  'scrollButtons',
  'scrollButtonsHideMobile',
  'tabsDivider',
  'indicator'
]);
