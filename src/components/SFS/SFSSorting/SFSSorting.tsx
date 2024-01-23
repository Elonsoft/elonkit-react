import React, { memo, useState } from 'react';

import { SFSSortingProps } from './SFSSorting.types';

import clsx from 'clsx';
import { getSFSSortingUtilityClass, sfsSortingClasses } from './SFSSorting.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { IconSortAscending2, IconSortDescending2, IconSortOff } from '../../../icons';
import { SortingMenu } from '../../SortingMenu';
import { svgIconClasses } from '../../SvgIcon';
import { SFSButton } from '../SFSButton';

type SFSSortingOwnerState = {
  classes?: SFSSortingProps['classes'];
  isWithValue?: boolean;
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    menuButton: ['menuButton'],
    menuButtonBadge: ['menuButtonBadge']
  };

  return composeClasses(slots, getSFSSortingUtilityClass, classes);
};

const SFSSortingRoot = styled('div', {
  name: 'ESSFSSorting',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({}));

const SFSSortingMenuButton = styled(SFSButton, {
  name: 'ESSFSSorting',
  slot: 'MenuButton',
  overridesResolver: (_, styles) => styles.menuButton
})<{ ownerState: SFSSortingOwnerState }>(({ ownerState, theme }) => ({
  gap: '4px',

  [`&:hover .${sfsSortingClasses.menuButtonBadge}, &:focus-visible .${sfsSortingClasses.menuButtonBadge},, & .${sfsSortingClasses.menuButtonBadge}`]:
    {
      [`&.MuiTypography-root, & .${svgIconClasses.root}`]: {
        color: `${theme.palette.black.A800}`
      }
    },
  [theme.breakpoints.up('tabletXS')]: {
    [`& > .${svgIconClasses.root}`]: {
      display: ownerState.isWithValue && 'none'
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& > .MuiTypography-root:first-of-type': {
      display: 'none'
    }
  }
}));

const SFSSortingMenuButtonBadge = styled(Typography, {
  name: 'ESSFSSorting',
  slot: 'MenuButtonBadge',
  overridesResolver: (_, styles) => styles.menuButtonBadge
})(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary[300]
})) as typeof Typography;

export const SFSSorting = memo(function SFSSorting(inProps: SFSSortingProps) {
  const {
    classes: inClasses,
    className,
    sx,

    options,

    labelButton,
    iconSort = <IconSortOff />,
    iconAsc = <IconSortAscending2 container containerSize="16px" />,
    iconDesc = <IconSortDescending2 container containerSize="16px" />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSorting'
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const ownerState = { classes: inClasses, isWithValue: !!values[0] };
  const classes = useUtilityClasses(ownerState);

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  return (
    <SFSSortingRoot className={clsx(classes.root, className)} sx={sx}>
      <SFSSortingMenuButton className={classes.menuButton} ownerState={ownerState} onClick={onMenuOpen}>
        <Typography component="div" variant="body100">
          {values.length === 1 ? options.find((o) => o.value === values[0].value)?.label : labelButton}
        </Typography>
        {iconSort}
        {values.length === 1 && (
          <SFSSortingMenuButtonBadge className={classes.menuButtonBadge} component="div">
            {values[0].direction === 'asc' ? iconAsc : iconDesc}
          </SFSSortingMenuButtonBadge>
        )}
        {values.length > 1 && (
          <SFSSortingMenuButtonBadge className={classes.menuButtonBadge} component="div" variant="mini200">
            {values.length}
          </SFSSortingMenuButtonBadge>
        )}
      </SFSSortingMenuButton>
      <SortingMenu
        PopoverProps={{
          anchorEl: menuAnchor,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          },
          open: !!menuAnchor,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          onClose: onMenuClose
        }}
        options={options}
        {...props}
      />
    </SFSSortingRoot>
  );
});
