import { SidenavItemProps } from './SidenavItem.types';

import clsx from 'clsx';
import { getSidenavItemUtilityClass } from './SidenavItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { useSidebarContext } from '../../Sidebar/Sidebar.context';
import { useSidenavContext } from '../Sidenav.context';

type SidenavItemOwnerState = {
  color?: 'default' | 'primary';
  classes?: SidenavItemProps['classes'];
};

const useUtilityClasses = (ownerState: SidenavItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    iconButton: ['iconButton']
  };

  return composeClasses(slots, getSidenavItemUtilityClass, classes);
};

const SidenavItemIconButton = styled(IconButton, {
  name: 'ESSidenavItem',
  slot: 'IconButton',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidenavItemOwnerState }>(({ ownerState, theme }) => ({
  '&.MuiIconButton-root': {
    borderRadius: '4px'
  },
  '& .MuiTouchRipple-root': {
    borderRadius: '4px'
  },
  ...(ownerState.color === 'primary' && {
    '&.MuiIconButton-root': {
      color: `${theme.palette.monoB[500]}`,

      '&:hover': {
        color: `${theme.palette.monoB[500]}`
      }
    }
  }),
  ...(ownerState.color === 'default' && {
    '&.MuiIconButton-root': {
      color: `${theme.palette.monoA.A800}`,

      '&:hover': {
        color: `${theme.palette.monoA.A800}`
      }
    }
  })
}));

export const SidenavItem = (inProps: SidenavItemProps) => {
  const { id, icon, text, onClick, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidenavItem'
  });

  const { color } = useSidebarContext();
  const { open } = useSidenavContext();

  const ownerState = { open, color, ...props };
  const classes = useUtilityClasses(ownerState);

  const onSelectItem = () => {
    onClick && onClick(id);
  };

  return (
    <Typography onClick={onSelectItem} {...props}>
      {open ? (
        <Tooltip title={<>{text}</>} placement="right">
          <SidenavItemIconButton ownerState={ownerState} className={clsx(classes.iconButton)}>
            {icon}
          </SidenavItemIconButton>
        </Tooltip>
      ) : (
        <SidenavItemIconButton ownerState={ownerState} className={clsx(classes.iconButton)}>
          {icon}
        </SidenavItemIconButton>
      )}
    </Typography>
  );
};
