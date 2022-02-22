import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';

export const FlagRoot = styled(SvgIcon, {
  name: 'ESFlag',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  borderRadius: '2px',
  width: '24px',
  height: '16px',
  fontSize: '24px',
  outline: `1px solid ${theme.palette.monoA.A50}`,
  outlineOffset: '-1px'
}));
