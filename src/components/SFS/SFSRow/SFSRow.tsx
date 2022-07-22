import { SFSPRowProps } from './SFSRow.types';

import clsx from 'clsx';
import { getSFSRowUtilityClass } from './SFSRow.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type SFSRowOwnerState = {
  classes?: SFSPRowProps['classes'];
};

const useUtilityClasses = (ownerState: SFSRowOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSFSRowUtilityClass, classes);
};

const SFSRowRoot = styled('div', {
  name: 'ESSFSRow',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({
  display: 'flex'
}));

export const SFSRow = (inProps: SFSPRowProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSFSRow'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSRowRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </SFSRowRoot>
  );
};
