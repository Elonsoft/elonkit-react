import { BaseSnackbarOptions } from '../Snackbar.types';
import { SnackbarActionProps } from './SnackbarAction.types';

import clsx from 'clsx';
import { getSnackbarActionUtilityClass } from './SnackbarAction.classes';

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

type SnackbarActionOwnerState = {
  classes?: BaseSnackbarOptions['classes'];
  autoHideDuration?: number;
};

const useUtilityClasses = (ownerState: SnackbarActionOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    progress: ['progress']
  };

  return composeClasses(slots, getSnackbarActionUtilityClass, classes);
};

const SnackbarActionRoot = styled(IconButton, {
  name: 'ESSnackbarAction',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '&.MuiIconButton-root': {
    backgroundColor: theme.palette.monoB.A100,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    textTransform: 'none',
    padding: '4px'
  }
}));

const SnackbarActionClose = styled('div', {
  name: 'ESSnackbarActionClose',
  slot: 'Progress',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { autoHideDuration }
    } = props;
    return [styles.progress, styles[autoHideDuration]];
  }
})<{ ownerState: SnackbarActionOwnerState }>(
  ({ theme }) => ({
    position: 'absolute',
    backgroundColor: theme.palette.monoB.A200,
    width: '100%',
    height: '100%',
    transform: 'translateX(-100%)'
  }),
  ({ ownerState: { autoHideDuration } }) => ({
    ...css`
      animation: ${closeProgress} ${autoHideDuration}ms linear 1;
    `
  })
);

export const SnackbarAction = (inProps: SnackbarActionProps) => {
  const { children, className, autoHideDuration, persist, sx, onClick, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarAction'
  });

  const ownerState = { autoHideDuration, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarActionRoot className={clsx(classes.root, className)} size="32" color="monoB" sx={sx} onClick={onClick}>
      {!persist && <SnackbarActionClose className={clsx(classes.progress)} ownerState={ownerState} />}
      {children}
    </SnackbarActionRoot>
  );
};
