import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type CalendarButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if selected=true. */
  selected: string;
  /** Styles applied to the root element if hovered=true. */
  hovered: string;
  /** Styles applied to the root element if today=true. */
  today: string;

  /** Styles applied to the root element if position='between'. */
  positionBetween: string;
  /** Styles applied to the root element if position='start'. */
  positionStart: string;
  /** Styles applied to the root element if position='end'. */
  positionEnd: string;

  /** Styles applied to the wrapper element. */
  wrapper: string;

  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the button element if inactive=true. */
  buttonInactive: string;
  /** Styles applied to the button element if selected=true. */
  buttonSelected: string;
  /** Styles applied to the button element if today=true. */
  buttonToday: string;

  /** Styles applied to the tooltip element. */
  tooltip: string;
};
export type CalendarButtonClassKey = keyof CalendarButtonClasses;

export function getCalendarButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESCalendarButton', slot);
}

export const calendarButtonClasses: CalendarButtonClasses = generateUtilityClasses('ESCalendarButton', [
  'root',
  'selected',
  'hovered',
  'today',
  'positionBetween',
  'positionStart',
  'positionEnd',
  'wrapper',
  'button',
  'buttonInactive',
  'buttonSelected',
  'buttonToday',
  'tooltip'
]);
