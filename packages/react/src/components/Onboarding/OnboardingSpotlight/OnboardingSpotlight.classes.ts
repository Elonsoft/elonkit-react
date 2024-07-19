import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type OnboardingSpotlightClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type OnboardingSpotlightClassKey = keyof OnboardingSpotlightClasses;

export function getOnboardingSpotlightUtilityClass(slot: string): string {
  return generateUtilityClass('ESOnboardingSpotlight', slot);
}

export const onboardingSpotlightClasses: OnboardingSpotlightClasses = generateUtilityClasses('ESOnboardingSpotlight', [
  'root'
]);
