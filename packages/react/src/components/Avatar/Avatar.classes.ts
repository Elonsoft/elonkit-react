import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AvatarClasses = {
  /** Styles applied to the root element. */
  root: string;
  variantSquare: string;
  variantCircle: string;
};
export type AvatarClassKey = keyof AvatarClasses;

export function getAvatarUtilityClass(slot: string): string {
  return generateUtilityClass('ESAvatar', slot);
}

export const avatarClasses: AvatarClasses = generateUtilityClasses('ESAvatar', [
  'root',
  'variantSquare',
  'variantCircle'
]);
