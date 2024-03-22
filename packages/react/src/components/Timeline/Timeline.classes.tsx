import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimelineClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type TimelineClassKey = keyof TimelineClasses;

export function getTimelineUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimeline', slot);
}

export const timelineClasses: TimelineClasses = generateUtilityClasses('ESTimeline', ['root']);
