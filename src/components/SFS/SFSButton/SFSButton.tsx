import { sfsFiltersClasses } from '../SFSFilters/SFSFilters.classes';
import { sfsSortingClasses } from '../SFSSorting/SFSSorting.classes';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { svgIconClasses } from '../../SvgIcon';

const SFSButtonRoot = styled(Button)(({ theme }) => ({
  gap: '4px',
  textTransform: 'inherit',
  '&.MuiButton-root': {
    '&:hover .ESSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .ESSvgIcon-root, &:focus-visible .MuiTypography-root':
      {
        color: theme.palette.monoA.A600
      },

    '& .MuiTypography-root': {
      color: theme.palette.monoA.A550
    },

    '& .ESSvgIcon-root': {
      color: theme.palette.monoA.A500
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& > .MuiTypography-root:first-of-type': {
      display: 'none'
    }
  },
  [`&:hover .${sfsSortingClasses.buttonBadge}, &:focus-visible .${sfsSortingClasses.buttonBadge}, & .${sfsSortingClasses.buttonBadge}, &:hover .${sfsFiltersClasses.buttonBadge}, &:focus-visible .${sfsFiltersClasses.buttonBadge}, & .${sfsFiltersClasses.buttonBadge}`]:
    {
      [`&.MuiTypography-root, & .${svgIconClasses.root}`]: {
        color: `${theme.palette.black.A800}`
      }
    }
}));

export const SFSButtonBadge = styled(Typography)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary[300]
})) as typeof Typography;

export const SFSButton: typeof Button = ({ children, ...props }: any) => (
  <SFSButtonRoot color="tertiary" size="32" {...props}>
    {children}
  </SFSButtonRoot>
);
