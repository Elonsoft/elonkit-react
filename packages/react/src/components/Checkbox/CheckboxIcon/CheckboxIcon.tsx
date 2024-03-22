import React from 'react';

import { CheckboxIconProps } from './CheckboxIcon.types';

import clsx from 'clsx';
import { getCheckboxIconUtilityClass } from './CheckboxIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type CheckboxIconOwnerState = {
  classes?: CheckboxIconProps['classes'];
};

const useUtilityClasses = (ownerState: CheckboxIconOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getCheckboxIconUtilityClass, classes);
};

const CheckboxIconRoot = styled('div', {
  name: 'ESCheckboxIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: CheckboxIconOwnerState }>(({ theme }) => ({
  boxShadow: `inset 0 0 0 2px ${theme.palette.monoA.A600}`,
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const CheckboxIcon = (inProps: CheckboxIconProps) => {
  const { className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESCheckboxIcon' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <CheckboxIconRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props} />;
};
