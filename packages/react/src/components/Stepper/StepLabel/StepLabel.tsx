import { StepLabelProps } from './StepLabel.types';

import clsx from 'clsx';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { getStepLabelUtilityClass, Typography } from '@mui/material';

type StepLabelOwnerState = {
  classes?: StepLabelProps['classes'];
};

const useUtilityClasses = (ownerState: StepLabelOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getStepLabelUtilityClass, classes);
};

const StepLabelRoot = styled(Typography, {
  name: 'ESStepLabelRoot',
  slot: 'Indicator',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: StepLabelOwnerState }>(({ theme }) => ({
  color: theme.palette.monoA.A900,
  textTransform: 'none',
}));

export const StepLabel = (inProps: StepLabelProps) => {
  const { className, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESStepLabel',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <StepLabelRoot className={clsx(classes.root, className)} ownerState={ownerState} variant="body100" {...props}>
      {children}
    </StepLabelRoot>
  );
};
