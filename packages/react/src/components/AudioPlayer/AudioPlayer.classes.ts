import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AudioPlayerClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon button element. */
  iconButton: string;
  /** Styles applied to the time slider container element. */
  current: string;
  /** Styles applied to the time tooltip. */
  currentTooltip: string;
  /** Styles applied to the time tooltip if audio player is playing. */
  currentTooltipPlaying: string;
  /** Styles applied to the time tooltip if audio player is paused. */
  currentTooltipPaused: string;
  /** Styles applied to the time tooltip if mouse is over time slider track. */
  currentTooltipOverTrack: string;
  /** Styles applied to the time tooltip if mouse is over time slider thumb. */
  currentTooltipOverThumb: string;
  /** Styles applied to the time slider. */
  currentSlider: string;
  /** Styles applied to the time slider if audio player is playing. */
  currentSliderPlaying: string;
  /** Styles applied to the time slider if audio player is paused. */
  currentSliderPaused: string;
  /** Styles applied to the current time element. */
  time: string;
  /** Styles applied to the volume tooltip. */
  tooltip: string;
  /** Styles applied to the menu tooltip. */
  menu: string;
  /** Styles applied to the main menu list. */
  menuList: string;
  /** Styles applied to the menu items. */
  menuItem: string;
  /** Styles applied to the main menu items. */
  mainMenuItem: string;
  /** Styles applied to the list item icon elements. */
  listItemIcon: string;
  /** Styles applied to the list item text elements. */
  listItemText: string;
  /** Styles applied to the list divider element. */
  listDivider: string;
  /** Styles applied to the rate menu open icon. */
  rateOpen: string;
  /** Styles applied to the check icon in rate menu. */
  rateCheck: string;
  /** Styles applied to the volume container element. */
  volume: string;
  /** Styles applied to the volume slider. */
  volumeSlider: string;
};
export type AudioPlayerClassKey = keyof AudioPlayerClasses;

export function getAudioPlayerUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayer', slot);
}

export const audioPlayerClasses: AudioPlayerClasses = generateUtilityClasses('ESAudioPlayer', [
  'root',
  'iconButton',
  'current',
  'currentTooltip',
  'currentTooltipPlaying',
  'currentTooltipPaused',
  'currentTooltipOverTrack',
  'currentTooltipOverThumb',
  'currentSlider',
  'currentSliderPlaying',
  'currentSliderPaused',
  'time',
  'tooltip',
  'menu',
  'menuList',
  'menuItem',
  'mainMenuItem',
  'listItemIcon',
  'listItemText',
  'listDivider',
  'rateOpen',
  'rateCheck',
  'volume',
  'volumeSlider'
]);
