import { ErrorPageProps } from './ErrorPage.types';

import clsx from 'clsx';
import { getErrorPageUtilityClass } from './ErrorPage.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type ErrorPageOwnerState = {
  classes?: ErrorPageProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getErrorPageUtilityClass, classes);
};
export const ErrorPageRoot = styled('div', {
  name: 'ESErrorPage',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(
  ({ theme }) => ({
    backgroundColor: theme.palette.surface[50],
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateAreas: `
      'logo'
      'status'
      'heading'
      'description'
      'actions'
      'footer'
    `,
    gridTemplateRows: '1fr auto auto auto auto auto',
    padding: '16px 32px 24px',

    [theme.breakpoints.up('tabletXS')]: {
      gridTemplateRows: '1fr auto auto auto auto 1fr'
    },

    [theme.breakpoints.up('desktopXS')]: {
      padding: '56px 160px 40px'
    },

    [theme.breakpoints.down('desktopXS')]: {
      backgroundImage: 'none'
    }
  }),
  { minHeight: '100dvh' }
);

export const ErrorPage = (inProps: ErrorPageProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESErrorPage'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </ErrorPageRoot>
  );
};
