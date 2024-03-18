import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerMenuClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon button element. */
  iconButton: string;
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
};
export type AudioPlayerMenuClassKey = keyof AudioPlayerMenuClasses;

export function getAudioPlayerMenuUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerMenu', slot);
}

export const audioPlayerMenuClasses: AudioPlayerMenuClasses = generateUtilityClasses('ESAudioPlayerMenu', [
  'root',
  'iconButton',
  'menuList',
  'menuItem',
  'mainMenuItem',
  'listItemIcon',
  'listItemText',
  'listDivider',
  'rateOpen',
  'rateCheck'
]);
