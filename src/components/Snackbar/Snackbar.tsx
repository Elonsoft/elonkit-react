import { useEffect } from 'react';

import { SnackbarProps } from './Snackbar.types';

import clsx from 'clsx';
import { getSnackbarUtilityClass } from './Snackbar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type SnackbarOwnerState = {
  classes?: SnackbarProps['classes'];
};

const useUtilityClasses = (ownerState: SnackbarOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    container: ['container']
  };

  return composeClasses(slots, getSnackbarUtilityClass, classes);
};

const SnackbarRoot = styled('div', {
  name: 'ESSnackbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.monoA.A800,
  backdropFilter: `blur(25px)`,
  padding: '0 8px 0 16px',
  borderRadius: '6px',
  minHeight: '48px'
}));

const SnackbarContainer = styled('div', {
  name: 'ESSnackbarContainer',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.monoB[500],

  '& .MuiSvgIcon-root': {
    transform: 'translateY(2px)'
  }
}));

export const Snackbar = (inProps: SnackbarProps) => {
  const { className, message, sx, icon, action, customSnackbar, autoHideDuration, persist, onClose, ...props } =
    useThemeProps({
      props: inProps,
      name: 'ESSnackbar'
    });

  useEffect(() => {
    if (!persist) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, autoHideDuration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      {!!customSnackbar ? (
        customSnackbar({ message: message || '', icon, onClose, action })
      ) : (
        <SnackbarRoot className={clsx(classes.root, className)} sx={sx}>
          <SnackbarContainer className={classes.container}>
            {icon} {message}
          </SnackbarContainer>
          {!!action && action({ onClose, icon, autoHideDuration, persist })}
        </SnackbarRoot>
      )}
    </>
  );
};
