import { ReactNode } from 'react';

import { OnboardingPopperClasses } from './OnboardingPopper.classes';

export interface OnboardingPopperProps {
  classes?: Partial<OnboardingPopperClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Title text for the Onboarding component. */
  title?: string;
  /** Subtitle text for the Onboarding component. */
  subtitle?: string;
  /** An array of steps for the Onboarding process. Each step may contain a popper element and an associated element to anchor the popper to. */
  steps?: {
    popper?: (props: any) => JSX.Element;
    element?: () => Element | null;
  }[];
  /** Index of the current step in the Onboarding process. */
  step?: number | null;
  /** Callback function invoked when the current step changes. */
  onStepChange?: (step: number | null) => void;
  /** Text for the button to navigate to the previous step. */
  labelBackButton?: string;
  /** Text for the button to navigate to the next step. */
  labelNextButton?: string;
  /** Icon element for the close button. */
  iconClose?: ReactNode;
  /** Icon element for the information button. */
  iconInformation?: ReactNode;
}
