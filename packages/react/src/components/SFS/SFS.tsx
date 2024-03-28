import { SFSProps } from './SFS.types';

import clsx from 'clsx';
import { getSFSUtilityClass } from './SFS.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type SFSOwnerState = {
  classes?: SFSProps['classes'];
};

const useUtilityClasses = (ownerState: SFSOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSFSUtilityClass, classes);
};

/**
 * The set of component for searching, filtering and sorting.
 */
const SFSRoot = styled('div', {
  name: 'ESSFS',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({ theme }) => ({
  padding: '8px',
  backgroundColor: theme.vars.palette.surface[100],
  boxShadow: theme.vars.palette.shadow.down[100],
  borderRadius: '6px'
}));

export const SFS = (inProps: SFSProps) => {
  const { className, sx, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSFS'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </SFSRoot>
  );
};
