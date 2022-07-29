import { getSFSSortingUtilityClass } from './SFSSorting.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';

import { IconArrowDownRounded, IconArrowUpRounded } from '../../../icons';

const useUtilityClasses = () => {
  const slots = {
    openMenuButtonBadge: ['openMenuButtonBadge']
  };

  return composeClasses(slots, getSFSSortingUtilityClass, undefined);
};

const SFSSortingOpenMenuButtonBadgeRoot = styled('div')(({ theme }) => ({
  width: '16px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary[300],
  borderRadius: '16px',

  '& .MuiSvgIcon-root': {
    color: `${theme.palette.black.A800}!important`
  },

  [theme.breakpoints.down('tabletXS')]: {
    marginLeft: '2px',
    marginRight: '2px'
  }
}));

export const SFSSortingOpenMenuButtonBadge = ({ direction }: { direction: 'asc' | 'desc' }) => {
  const classes = useUtilityClasses();
  return (
    <SFSSortingOpenMenuButtonBadgeRoot className={classes.openMenuButtonBadge}>
      {direction === 'asc' ? <IconArrowUpRounded /> : <IconArrowDownRounded />}
    </SFSSortingOpenMenuButtonBadgeRoot>
  );
};
