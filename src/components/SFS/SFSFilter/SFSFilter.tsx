import { useState } from 'react';

import { SFSFilterProps } from './SFSFilter.types';

import clsx from 'clsx';
import { getSFSFilterUtilityClass } from './SFSFilter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

import { IconFilterVariantSmall } from '../../../icons';
import { SFSButton, SFSButtonText } from '../SFSButton';

type SFSSortingOwnerState = {
  classes?: SFSFilterProps['classes'];
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSFSFilterUtilityClass, classes);
};

const SFSFilterRoot = styled(SFSButton, {
  name: 'ESSFSFilter',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({}));

export const SFSFilter = (inProps: SFSFilterProps) => {
  const { className, sx, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSFSFilter'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const onDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <SFSFilterRoot onClick={onDrawerOpen} className={clsx(classes.root, className)} sx={sx}>
        <SFSButtonText>Фильтр</SFSButtonText>
        <IconFilterVariantSmall />
      </SFSFilterRoot>
      <Drawer anchor="right" open={isDrawerOpen} onClose={onDrawerClose}>
        {children}
      </Drawer>
    </>
  );
};
