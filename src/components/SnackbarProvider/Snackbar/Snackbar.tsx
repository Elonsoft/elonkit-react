import { FC, useEffect } from 'react';

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
    content: ['content'],
    action: ['action']
  };

  return composeClasses(slots, getSnackbarUtilityClass, classes);
};

const SnackbarRoot = styled('div', {
  name: 'ESSnackbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '440px',
  backgroundColor: theme.palette.monoA.A800,
  height: '56px',
  borderRadius: '6px',
  marginTop: '6px',
  transition: 'all 300ms ease 0ms'
}));

const SnackbarContent = styled('div', {
  name: 'ESSnackbarContent',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(() => ({
  display: 'flex',
  padding: '8px 12px 8px 16px'
}));

const SnackbarMessage = styled('div', {
  name: 'ESSnackbarMessage',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.monoB[500],

  '& .MuiSvgIcon-root': {
    transform: 'translateY(2px)',
    marginRight: '8px',
    color: theme.palette.success[500]
  }
}));

const SnackbarAction = styled('div', {
  name: 'ESSnackbarAction',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiButton-root.MuiButton-text, .MuiButtonBase-root.MuiIconButton-root': {
    color: theme.palette.monoB.A900,
    backgroundColor: theme.palette.monoB.A100,
    borderRadius: '4px',
    height: '32px',
    textTransform: 'none',

    '&:hover': {
      color: theme.palette.monoB.A900,
      backgroundColor: theme.palette.monoB.A100
    },

    '&:first-of-type': {
      padding: '6px 12px'
    },

    '&:last-of-type': {
      margin: '0 8px',
      padding: '4px'
    }
  }
}));

export const Snackbar: FC<SnackbarProps> = (inProps) => {
  const { className, message, sx, icon, action, customSnackbar, autoHideDuration, onClose, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSnackbar'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, autoHideDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!!customSnackbar ? (
        customSnackbar(onClose, message)
      ) : (
        <SnackbarRoot className={clsx(classes.root, className)} sx={sx}>
          <SnackbarContent className={classes.content}>
            <SnackbarMessage>
              {icon}
              {message}
            </SnackbarMessage>
          </SnackbarContent>
          {!!action && <SnackbarAction className={classes.action}>{action(onClose)}</SnackbarAction>}
        </SnackbarRoot>
      )}
    </>
  );
};
