import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { svgIconClasses } from '../../SvgIcon';
import { sfsFiltersClasses } from '../SFSFilters';
import { sfsSortingClasses } from '../SFSSorting';

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
  [`& .${sfsSortingClasses.buttonBadge}, & .${sfsFiltersClasses.buttonBadge}`]: {
    width: '16px',
    height: '16px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary[300]
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

export const SFSButton: typeof Button = ({ children, ...props }: any) => (
  <SFSButtonRoot color="tertiary" size="32" {...props}>
    {children}
  </SFSButtonRoot>
);
