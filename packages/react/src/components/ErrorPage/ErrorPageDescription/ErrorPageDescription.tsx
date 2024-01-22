import { ErrorPageDescriptionProps } from './ErrorPageDescription.types';

import clsx from 'clsx';
import { getErrorPageDescriptionUtilityClass } from './ErrorPageDescription.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type ErrorPageDescriptionOwnerState = {
  classes?: ErrorPageDescriptionProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageDescriptionOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getErrorPageDescriptionUtilityClass, classes);
};
export const ErrorPageDescriptionRoot = styled(Typography, {
  name: 'ESErrorPageDescription',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.palette.monoA.A550,
  gridArea: 'description',
  maxWidth: '524px',
  marginTop: '16px'
}));

export const ErrorPageDescription = (inProps: ErrorPageDescriptionProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESErrorPageDescription'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageDescriptionRoot className={clsx(classes.root, className)} sx={sx} variant="body200">
      {children}
    </ErrorPageDescriptionRoot>
  );
};
