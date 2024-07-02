import { OnboardingSpotlightProps } from './OnboardingSpotlight.types';

import clsx from 'clsx';
import { getOnboardingSpotlightUtilityClass } from './OnboardingSpotlight.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type OnboardingSpotlightOwnerState = {
  classes?: OnboardingSpotlightProps['classes'];
  rect: DOMRect | null;
  padding?: number;
};

const useUtilityClasses = (ownerState: OnboardingSpotlightOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getOnboardingSpotlightUtilityClass, classes);
};

const SpotlightRoot = styled('div', {
  name: 'OnboardingSpotlight',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})<{ ownerState: OnboardingSpotlightOwnerState }>(({ ownerState: { rect, padding = 0 } }) => ({
  position: 'absolute',
  background: 'grey',
  borderRadius: '4px',
  top: rect ? rect.top - padding : 'auto',
  left: rect ? rect.left - padding : 'auto',
  width: rect ? rect.width + padding * 2 : 'auto',
  height: rect ? rect.height + padding * 2 : 'auto'
}));

export const OnboardingSpotlight = (inProps: OnboardingSpotlightProps) => {
  const props = useThemeProps({
    props: inProps,
    name: 'ESOnboardingSpotlight'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpotlightRoot
      key="OnboardingSpotlight"
      className={clsx(classes.root, ownerState.className)}
      data-onboarding-id="spotlight"
      ownerState={ownerState}
    />
  );
};
