import { SidebarToggleProps } from './SidebarToggle.types';

import clsx from 'clsx';
import { getSidebarToggleUtilityClass } from './SidebarToggle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { IconChevronLeft } from '../../../icons';
import { useSidebarContext } from '../Sidebar.context';

type SidebarToggleOwnerState = {
  color?: 'default' | 'primary';
  classes?: SidebarToggleProps['classes'];
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidebarToggleOwnerState) => {
  const { classes, open } = ownerState;

  const slots = {
    root: ['root'],
    divider: ['divider'],
    button: ['button', open && 'button-open']
  };

  return composeClasses(slots, getSidebarToggleUtilityClass, classes);
};

const SidebarToggleRoot = styled('div', {
  name: 'ESSidebarToggle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: '9px'
}));

const SidebarToggleDivider = styled(Divider, {
  name: 'ESSidebarToggle',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  width: '100%'
}));

const SidebarToggleButton = styled(IconButton, {
  name: 'ESSidebarToggle',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidebarToggleOwnerState }>(({ theme, ownerState }) => ({
  '&.MuiIconButton-root': {
    width: '20px',
    height: '20px',
    border: `1px solid ${theme.palette.monoA.A100}`,
    borderRadius: '24px',
    transform: `rotate(${ownerState.open ? '' : '18'}0deg)`,
    zIndex: '10',

    ...(ownerState.color === 'default' && {
      backgroundColor: theme.palette.common.background,
      color: `${theme.palette.monoA.A800}`,

      '&:hover': {
        backgroundColor: `${theme.palette.common.background}`,
        color: `${theme.palette.monoA.A800}`
      }
    }),
    ...(ownerState.color === 'primary' && {
      backgroundColor: theme.palette.primary[300],
      color: `${theme.palette.monoB[500]}`,

      '&:hover': {
        backgroundColor: theme.palette.primary[300],
        color: `${theme.palette.monoB[500]}`
      }
    })
  }
}));

export const SidebarToggle = (inProps: SidebarToggleProps) => {
  const {
    className,
    sx,
    open,
    icon = <IconChevronLeft />,
    labelOpen,
    labelHide,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarToggle'
  });

  const { color } = useSidebarContext();

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarToggleRoot className={clsx(classes.root, className)} sx={sx}>
      <SidebarToggleDivider className={clsx(classes.divider)} />

      <SidebarToggleButton
        className={clsx(classes.button)}
        onClick={onClick}
        ownerState={ownerState}
        aria-label={open ? labelHide : labelOpen}
      >
        {icon}
      </SidebarToggleButton>
    </SidebarToggleRoot>
  );
};
