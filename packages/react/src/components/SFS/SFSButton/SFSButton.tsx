import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SFSButtonRoot = styled(Button)(({ theme }) => ({
  textTransform: 'inherit',
  '&.MuiButton-root': {
    '&:hover .ESSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .ESSvgIcon-root, &:focus-visible .MuiTypography-root':
      {
        color: theme.vars.palette.monoA.A600
      },

    '& .MuiTypography-root': {
      color: theme.vars.palette.monoA.A550
    },

    '& .ESSvgIcon-root': {
      color: theme.vars.palette.monoA.A500
    }
  }
}));

export const SFSButton: typeof Button = ({ children, ...props }: any) => (
  <SFSButtonRoot color="tertiary" size="32" {...props}>
    {children}
  </SFSButtonRoot>
);
