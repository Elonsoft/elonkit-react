import { SidebarDividerProps } from './SidebarDivider.types';

import clsx from 'clsx';
import { getSidebarDividerUtilityClass } from './SidebarDivider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

type SidebarDividerOwnerState = {
  classes?: SidebarDividerProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarDividerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSidebarDividerUtilityClass, classes);
};

const SidebarDividerRoot = styled('div', {
  name: 'ESSidebarDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  margin: '8px 0',
  width: '100%',
  padding: '0 8px'
}));

export const SidebarDivider = (inProps: SidebarDividerProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebarDivider'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarDividerRoot sx={sx} className={clsx(className, classes.root)} {...props}>
      <Divider />
    </SidebarDividerRoot>
  );
};
