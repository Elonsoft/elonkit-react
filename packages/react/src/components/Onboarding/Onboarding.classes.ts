import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type OnboardingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the backdrop element. */
  backdrop: string;
  /** Styles applied to the spotlight element. */
  spotlight: string;
  /** Styles applied in the "open" state. */
  open: string;
  /** Styles applied to the spotlightStep element. */
  spotlightStep: string;
};

export type OnboardingClassKey = keyof OnboardingClasses;

export function getOnboardingUtilityClass(slot: string): string {
  return generateUtilityClass('ESOnboarding', slot);
}

export const onboardingClasses = generateUtilityClasses('ESOnboarding', [
  'root',
  'backdrop',
  'spotlight',
  'open',
  'spotlightStep'
]);
