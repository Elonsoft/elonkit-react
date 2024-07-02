import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type OnboardingPopperClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the button element. */
  button: string;
};

export type OnboardingPopperClassKey = keyof OnboardingPopperClasses;

export function getOnboardingPopperUtilityClass(slot: string): string {
  return generateUtilityClass('ESOnboardingPopper', slot);
}

export const onboardingPopperClasses: OnboardingPopperClasses = generateUtilityClasses('ESOnboardingPopper', [
  'root',
  'container',
  'icon',
  'button'
]);
