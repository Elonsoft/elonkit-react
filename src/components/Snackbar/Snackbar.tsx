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
  backdropFilter: `blur(50px)`,
  height: '56px',
  borderRadius: '6px',
  transition:
    'top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms'
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

export const Snackbar: FC<SnackbarProps> = (inProps) => {
  const { className, message, sx, icon, action, customSnackbar, autoHideDuration, persist, onClose, ...props } =
    useThemeProps({
      props: inProps,
      name: 'ESSnackbar'
    });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

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

  return (
    <>
      {!!customSnackbar ? (
        customSnackbar({ message: message || '', icon, onClose, action })
      ) : (
        <SnackbarRoot className={clsx(classes.root, className)} sx={sx}>
          <SnackbarContent className={classes.content}>
            <SnackbarMessage>
              {icon}
              {message}
            </SnackbarMessage>
          </SnackbarContent>
          {!!action && action({ onClose, icon, autoHideDuration, persist })}
        </SnackbarRoot>
      )}
    </>
  );
};
