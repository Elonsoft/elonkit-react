import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PhoneFieldClasses = {
  /** Styles applied to the root element. */
  root: string;
  startAdornment: string;
  menuButton: string;
  item: string;
  itemPrimary: string;
  countryDisplayName: string;
  countryCallingCode: string;
};
export type PhoneFieldClassKey = keyof PhoneFieldClasses;

export function getPhoneFieldUtilityClass(slot: string): string {
  return generateUtilityClass('ESPhoneField', slot);
}

export const phoneFieldClasses: PhoneFieldClasses = generateUtilityClasses('ESPhoneField', [
  'root',
  'startAdornment',
  'menuButton',
  'item',
  'itemPrimary',
  'countryDisplayName',
  'countryCallingCode'
]);
