import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AvatarGroupClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the avatar elements. */
  avatar: string;
  /** Styles applied to the root element if direction="rtl". */
  rtl: string;
  /** Styles applied to the root element if direction="ltr". */
  ltr: string;
};
export type AvatarGroupClassKey = keyof AvatarGroupClasses;

export function getAlertUtilityClass(slot: string): string {
  return generateUtilityClass('ESAvatarGroup', slot);
}

export const avatarGroupClasses: AvatarGroupClasses = generateUtilityClasses('ESAvatarGroup', [
  'root',
  'avatar',
  'rtl',
  'ltr'
]);
