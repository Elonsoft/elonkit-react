import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SFSButtonRoot = styled(Button)(({ theme }) => ({
  textTransform: 'inherit',
  '&.MuiButton-root': {
    padding: '0 8px',
    flexShrink: 0,

    '&:hover .MuiSvgIcon-root, &:hover .MuiTypography-root': {
      color: theme.palette.monoA.A600
    },

    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.monoA.A200
    },

    '& .MuiSvgIcon-root': {
      color: theme.palette.monoA.A550,
      margin: '0 -4px'
    },

    [theme.breakpoints.down('tabletXS')]: {
      padding: '0 4px',
      '& .MuiSvgIcon-root': {
        margin: '0'
      }
    }
  }
}));

export const SFSButton: typeof Button = ({ children, ...props }: any) => (
  <SFSButtonRoot disableFocusRipple color="monoA" size="32" {...props}>
    {children}
  </SFSButtonRoot>
);
