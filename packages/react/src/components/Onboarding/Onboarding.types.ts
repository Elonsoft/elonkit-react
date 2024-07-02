import { OnboardingClasses } from './Onboarding.classes';

import { SxProps, Theme } from '@mui/material';

export interface OnboardingProps {
  classes?: Partial<OnboardingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Padding applied to the Onboarding component. */
  padding?: number;
  /** Index of the current step in the Onboarding process. */
  step: number | null;
  /** Callback function invoked when the current step changes. */
  onStepChange: (step: number | null) => void;
  /** An array of steps for the Onboarding process. Each step may contain a popper element and an associated element to anchor the popper to. */
  steps: {
    popper: (props: any) => JSX.Element;
    element: () => Element | null;
  }[];
}
