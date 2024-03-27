import { SidebarDividerProps } from './SidebarDivider.types';

import clsx from 'clsx';
import { getSidebarDividerUtilityClass } from './SidebarDivider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import { useSidebarContext } from '../Sidebar.context';

type SidebarDividerOwnerState = {
  classes?: SidebarDividerProps['classes'];
  color?: 'default' | 'primary' | 'secondary';
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidebarDividerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    line: ['line']
  };

  return composeClasses(slots, getSidebarDividerUtilityClass, classes);
};

const SidebarDividerRoot = styled('div', {
  name: 'ESSidebarDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidebarDividerOwnerState }>(({ theme, ownerState }) => ({
  padding: `0 ${ownerState.open ? 16 : 8}px`,
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: theme.transitions.easing.easeOut,
  transitionProperty: 'padding'
}));

const SidebarDividerLine = styled(Divider, {
  name: 'ESSidebarDivider',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.line
})<{ ownerState: SidebarDividerOwnerState }>(({ theme, ownerState: { color } }) => ({
  borderColor: `${color === 'default' || color === 'secondary' ? theme.vars.palette.monoA.A100 : theme.vars.palette.monoB.A200}`
}));

export const SidebarDivider = (inProps: SidebarDividerProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebarDivider'
  });

  const { color, open } = useSidebarContext();

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarDividerRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      <SidebarDividerLine className={clsx(className)} ownerState={ownerState} />
    </SidebarDividerRoot>
  );
};
