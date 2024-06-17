import { StepProps } from './Step.types';

import clsx from 'clsx';
import { getStepUtilityClass, stepClasses } from './Step.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { IconCheckW500, IconExclamation } from '../../../icons';
import { Button } from '../../Button';

type StepOwnerState = {
  classes?: StepProps['classes'];
  error?: boolean;
  completed?: boolean;
  size?: string;
  activeStep?: number;
  disabled?: boolean;
  position?: 'default' | 'bottom';
  orientation?: 'horizontal' | 'vertical';
};

const useUtilityClasses = (ownerState: StepOwnerState) => {
  const { classes, completed, error, size, position, orientation } = ownerState;

  const slots = {
    root: [
      'root',
      completed && 'completed',
      error && 'error',
      size && 'size',
      position && `position${capitalize(position)}`,
      orientation,
    ],
    button: ['button'],
    circle: ['circle'],
  };

  return composeClasses(slots, getStepUtilityClass, classes);
};

const StepRoot = styled(Button, {
  name: 'ESStepRoot',
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    const {
      ownerState: { orientation, position },
    } = _props;
    return [styles.wrapper, styles[orientation], position && styles[`position${capitalize(position)}`]];
  },
})<{ ownerState: StepOwnerState }>(() => ({
  minHeight: '57px',
  height: '100%',
  position: 'relative',
  '& .ESButtonBase-wrapper': {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  [`&.${stepClasses.positionBottom}`]: {
    [`&:not(.${stepClasses.vertical})`]: {
      '& .ESButtonBase-wrapper': {
        flexDirection: 'column',
        height: 'auto',
        marginTop: '21px',
      },
    },
  },
}));

const StepCircle = styled('div', {
  name: 'ESStepCircle',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { completed, error, disabled },
    } = props;
    return [styles.button, completed && styles.completed, error && styles.error, disabled && styles.disabled];
  },
})<{ ownerState: StepOwnerState }>(({ theme, ownerState }) => ({
  marginRight: '12px',
  marginLeft: '8px',
  borderRadius: '50%',
  width: `${ownerState.size}px`,
  color: theme.palette.monoB[500],
  height: `${ownerState.size}px`,
  display: 'flex',
  minWidth: `${ownerState.size}px`,
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.monoA.A500,

  ...((ownerState.completed || ownerState.activeStep) && {
    background: theme.palette.primary[300],
  }),

  ...(ownerState.error && {
    background: theme.palette.error[300],
  }),

  ...(ownerState.disabled && {
    background: theme.palette.monoA.A300,
  }),
}));

export const Step = (inProps: StepProps) => {
  const {
    sx,
    className,
    disabled,
    children,
    error,
    stepIndex,
    completed,
    activeStep,
    position,
    size = '32',
    orientation,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStep',
  });
  const ownerState = {
    ...props,
    size,
    error,
    completed,
    activeStep,
    disabled,
    position,
    orientation,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <StepRoot className={clsx(className, classes.root)} disabled={disabled} ownerState={ownerState} sx={sx}>
      <StepCircle className={clsx(className, classes.circle)} ownerState={ownerState}>
        {completed ? (
          <IconCheckW500 size={size} style={{ color: '#fff', padding: '4px' }} />
        ) : error ? (
          <IconExclamation size={size} style={{ color: '#fff' }} />
        ) : (
          stepIndex
        )}
      </StepCircle>
      {children}
    </StepRoot>
  );
};
