import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimelineItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the opposite content element. */
  oppositeContent: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the header element. */
  header: string;
  /** Styles applied to the divider point element. */
  dividerPoint: string;
  /** Styles applied to the divider line element. */
  dividerLine: string;
  /** Styles applied to the divider element. */
  divider: string;

  /** Styles applied to the root element if weight='xs'. */
  weightXS: string;
  /** Styles applied to the root element if  weight='sm'. */
  weightSM: string;
};

export type TimelineItemClassKey = keyof TimelineItemClasses;

export function getTimelineItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimelineItem', slot);
}

export const timelineItemClasses: TimelineItemClasses = generateUtilityClasses('ESTimelineItem', [
  'root',
  'oppositeContent',
  'content',
  'container',
  'header',
  'dividerPoint',
  'dividerLine',
  'divider',
  'weightXS',
  'weightSM'
]);
