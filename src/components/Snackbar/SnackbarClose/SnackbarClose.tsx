import { FC } from 'react';

import { BaseSnackbarOptions } from '../Snackbar.types';
import { SnackbarCloseProps } from './SnackbarClose.types';

import clsx from 'clsx';
import { getSnackbarCloseUtilityClass } from './SnackbarClose.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { css, keyframes, styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const closeProgress = keyframes`
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(0);
  }
`;

type SnackbarCloseOwnerState = {
  classes?: BaseSnackbarOptions['classes'];
  autoHideDuration?: number;
};

const useUtilityClasses = (ownerState: SnackbarCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    progress: ['progress']
  };

  return composeClasses(slots, getSnackbarCloseUtilityClass, classes);
};

const SnackbarCloseRoot = styled(IconButton, {
  name: 'ESSnackbarClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.action
})(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&.MuiButtonBase-root.MuiIconButton-root': {
    color: theme.palette.monoB.A900,
    backgroundColor: theme.palette.monoB.A100,
    borderRadius: '4px',
    height: '32px',
    textTransform: 'none',
    margin: '0 8px',
    padding: '4px',

    '&:hover': {
      color: theme.palette.monoB.A900,
      backgroundColor: theme.palette.monoB.A100
    }
  }
}));

const SnackbarCloseProgress = styled('div', {
  name: 'ESSnackbarCloseProgress',
  slot: 'Progress',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { autoHideDuration }
    } = props;
    return [styles.progress, styles[autoHideDuration]];
  }
})<{ ownerState: SnackbarCloseOwnerState }>(
  ({ theme }) => ({
    position: 'absolute',
    backgroundColor: theme.palette.monoB.A200,
    width: '100%',
    height: '100%',
    transform: 'translateX(-100%)'
  }),
  ({ ownerState }) => ({
    ...css`
      animation: ${closeProgress} ${ownerState.autoHideDuration}ms linear 1;
    `
  })
);

export const SnackbarClose: FC<SnackbarCloseProps> = (inProps) => {
  const { className, onClick, autoHideDuration, persist, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarClose'
  });

  const ownerState = { ...props, autoHideDuration };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarCloseRoot className={clsx(classes.root, className)} size="32" onClick={onClick}>
      {!persist && <SnackbarCloseProgress ownerState={ownerState} />}

      {children}
    </SnackbarCloseRoot>
  );
};
