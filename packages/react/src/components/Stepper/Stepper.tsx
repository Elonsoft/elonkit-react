import React from 'react';

import { StepperProps } from './Stepper.types';

import clsx from 'clsx';
import { getStepperUtilityClass, stepperClasses } from './Stepper.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type StepperOwnerState = {
  classes?: StepperProps['classes'];
  orientation?: 'horizontal' | 'vertical';
  activeStep?: StepperProps['activeStep'];
  size?: StepperProps['size'];
  position?: 'default' | 'bottom';
  size24?: boolean;
};

const useUtilityClasses = (ownerState: StepperOwnerState) => {
  const { classes, orientation, size24 } = ownerState;

  const slots = {
    root: ['root', orientation, size24 && 'size24'],
    container: ['container'],
    activeStep: ['activeStep'],
    size: ['size'],
  };

  return composeClasses(slots, getStepperUtilityClass, classes);
};

const StepperRoot = styled('div', {
  name: 'ESStepperContainer',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation },
    } = props;

    return [styles.container, styles[orientation]];
  },
})<{ ownerState: StepperOwnerState }>(() => ({
  display: 'flex',
  [`&.${stepperClasses.horizontal}`]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  [`&.${stepperClasses.vertical}`]: {
    flexDirection: 'column',
    alignItems: 'initial',
    gap: '8px',
  },
}));

const StepperConnectorRoot = styled('div', {
  name: 'ESStepperConnectorLine',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.container,
})(() => ({
  position: 'relative',
  width: '100%',
}));

const StepperContainer = styled('div', {
  name: 'ESStepContainer',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})(() => ({}));

const StepperConnectorLine = styled('div', {
  name: 'ESStepperConnectorLine',
  slot: 'Line',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation, size, size24 },
    } = props;

    return [styles.line, styles[orientation], styles[size], styles[size24]];
  },
})<{ ownerState: StepperOwnerState; isActive: boolean }>(({ theme, isActive }) => ({
  position: 'absolute',
  height: '1px',
  backgroundColor: isActive ? theme.palette.primary[300] : theme.palette.monoA.A300,

  [`&.${stepperClasses.horizontal}`]: {
    width: '100%',
    marginLeft: '-4px',
  },

  [`&.${stepperClasses.vertical}`]: {
    left: '15px',
    right: '-16px',
    width: '34px',
    transform: 'rotate(90deg)',
  },
  [`&.${stepperClasses.size24}`]: {
    [`&.${stepperClasses.vertical}`]: {
      left: '12px',
      width: '34px',
      transform: 'rotate(90deg)',
    },
  },
}));

export const Stepper = (inProps: StepperProps) => {
  const {
    className,
    sx,
    children,
    activeStep,
    orientation = 'horizontal',
    position = 'default',
    size = '32',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStepper',
  });

  const ownerState = {
    ...props,
    position,
    orientation,
    activeStep,
    size,
    size24: size === '24',
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <StepperRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      {React.Children.map(children, (child, index) => (
        <>
          <StepperContainer key={index}>
            {React.cloneElement(child as React.ReactElement, {
              ...props,
              activeStep: activeStep === index,
              orientation,
              position,
              size,
              stepIndex: index + 1,
            })}
          </StepperContainer>
          {index < React.Children.count(children) - 1 && (
            <StepperConnectorRoot>
              <StepperConnectorLine
                className={clsx(className, classes.root)}
                isActive={index < activeStep}
                ownerState={ownerState}
              />
            </StepperConnectorRoot>
          )}
        </>
      ))}
    </StepperRoot>
  );
};
