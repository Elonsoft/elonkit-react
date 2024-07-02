import { useEffect, useState } from 'react';

import { OnboardingProps } from './Onboarding.types';

import { getOnboardingUtilityClass } from './Onboarding.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Backdrop, Portal } from '@mui/material';

import { OnboardingSpotlight } from './OnboardingSpotlight';

import { useDebounce, useScrollLock } from '../../hooks';

type OnboardingOwnerState = {
  classes?: OnboardingProps['classes'];
  steps?: OnboardingProps['steps'];
  step?: OnboardingProps['step'];
  padding?: OnboardingProps['padding'];
};

const useUtilityClasses = (ownerState: OnboardingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['onboarding-root'],
    backdrop: ['onboarding-backdrop'],
    spotlight: ['onboarding-spotlight']
  };

  return composeClasses(slots, getOnboardingUtilityClass, classes);
};

const OnboardingBackdrop = styled(Backdrop, {
  name: 'ESOnboardingBackdrop',
  slot: 'Backdrop',
  overridesResolver: (styles) => styles.backdrop
})<{ ownerState: OnboardingProps }>(() => ({
  mixBlendMode: 'hard-light'
}));

/**
 * The onboarding component allows you to create a reliable adaptation system for your web application
 */
export const Onboarding = (inProps: OnboardingProps) => {
  const { steps, sx, padding, step, onStepChange } = useThemeProps({
    props: inProps,
    name: 'ESOnboarding'
  });
  const [rect, setRect] = useState<DOMRect | null>(null);
  const currentStep = step ?? 0;
  const currentPopper = steps?.[currentStep].popper;

  const stepCurrent = steps?.[currentStep];
  const element = stepCurrent && stepCurrent.element ? stepCurrent.element() : null;

  useScrollLock(Boolean(step !== null && steps), document.body);

  useDebounce(
    () => {
      if (typeof step === 'number' && Array.isArray(steps)) {
        const stepElement = steps[step].element && steps[step].element();
        if (stepElement) {
          setRect(stepElement.getBoundingClientRect());
        } else {
          onStepChange?.(step + 1);
        }
      }
    },
    500,
    [step, steps]
  );

  useEffect(() => {
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [element]);

  const classes = useUtilityClasses({ steps, padding, step });

  return (
    <>
      {step !== null && (
        <Portal>
          <OnboardingBackdrop open className={classes.root} ownerState={inProps} sx={sx}>
            <OnboardingSpotlight padding={padding} rect={rect} />
          </OnboardingBackdrop>
        </Portal>
      )}
      {step !== null && currentPopper && currentPopper({ currentStep, steps, step, onStepChange })}
    </>
  );
};
