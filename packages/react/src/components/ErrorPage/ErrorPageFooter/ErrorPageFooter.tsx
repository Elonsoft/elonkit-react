import { ErrorPageFooterProps } from './ErrorPageFooter.types';

import clsx from 'clsx';
import { getErrorPageFooterUtilityClass } from './ErrorPageFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type ErrorPageFooterOwnerState = {
  classes?: ErrorPageFooterProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getErrorPageFooterUtilityClass, classes);
};
export const ErrorPageFooterRoot = styled(Typography, {
  name: 'ESErrorPageFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  alignSelf: 'flex-end',
  color: theme.palette.monoA.A500,
  gridArea: 'footer',
  paddingTop: '64px'
}));

export const ErrorPageFooter = (inProps: ErrorPageFooterProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESErrorPageFooter'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageFooterRoot className={clsx(classes.root, className)} sx={sx} variant="body100">
      {children}
    </ErrorPageFooterRoot>
  );
};
