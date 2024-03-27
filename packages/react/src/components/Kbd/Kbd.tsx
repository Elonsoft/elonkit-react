import { KbdProps } from './Kbd.types';

import clsx from 'clsx';
import { getKbdUtilityClass } from './Kbd.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type KbdOwnerState = {
  classes?: KbdProps['classes'];
  variant: 'raised' | 'contained' | 'outlined';
};

const useUtilityClasses = (ownerState: KbdOwnerState) => {
  const { classes, variant } = ownerState;

  const slots = {
    root: ['root', variant]
  };

  return composeClasses(slots, getKbdUtilityClass, classes);
};

const KbdRoot = styled('kbd', {
  name: 'ESKbd',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant }
    } = props;
    return [styles.root, styles[variant]];
  }
})<{ ownerState: KbdOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.body100,

  color: theme.vars.palette.monoA.A900,
  padding: '0 4px',
  display: 'inline-block',
  borderRadius: '4px',
  fontFamily: 'inherit',

  ...(ownerState.variant === 'raised' && {
    backgroundColor: theme.vars.palette.monoA.A75,
    boxShadow: `0 1px 0 1px ${theme.vars.palette.monoA.A300}`
  }),
  ...(ownerState.variant === 'contained' && {
    backgroundColor: theme.vars.palette.monoA.A75,
    boxShadow: `0 1px 0 ${theme.vars.palette.monoA.A300}, inset 0 0 0 1px ${theme.vars.palette.monoA.A50}`
  }),
  ...(ownerState.variant === 'outlined' && {
    boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A200}`
  })
}));

/**
 * Display keyboard button or keys combination.
 */
export const Kbd = (inProps: KbdProps) => {
  const { children, className, sx, variant = 'raised', ...props } = useThemeProps({ props: inProps, name: 'ESKbd' });

  const ownerState = { ...props, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <KbdRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {children}
    </KbdRoot>
  );
};
