import { OnboardingSpotlightClasses } from './OnboardingSpotlight.classes';

export interface OnboardingSpotlightProps {
  classes?: Partial<OnboardingSpotlightClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The rectangular area to be highlighted. */
  rect: DOMRect | null;
  /** Padding around the highlighted area. */
  padding?: number;
}
