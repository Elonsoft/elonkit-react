import { SnackbarCloseAllProps } from './SnackbarCloseAll.types';

import clsx from 'clsx';
import { getSnackbarCloseAllUtilityClass } from './SnackbarCloseAll.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';

type SnackbarCloseAllOwnerState = {
  classes?: SnackbarCloseAllProps['classes'];
};

const useUtilityClasses = (ownerState: SnackbarCloseAllOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSnackbarCloseAllUtilityClass, classes);
};

const SnackbarCloseAllRoot = styled(Button, {
  name: 'ESSnackbarCloseAll',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '&.MuiButton-root': {
    width: '100%',
    maxWidth: '440px',
    height: '32px',
    backgroundColor: theme.palette.monoA.A800,

    '&.MuiButton-text': {
      padding: '8px 16px',
      color: theme.palette.monoB.A900
    },

    ...theme.typography.caption
  }
}));

export const SnackbarCloseAll = (inProps: SnackbarCloseAllProps) => {
  const { className, sx, labelCloseAll, onClose, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarCloseAll'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarCloseAllRoot className={clsx(classes.root, className)} color="inherit" sx={sx} onClick={onClose}>
      {labelCloseAll}
    </SnackbarCloseAllRoot>
  );
};
