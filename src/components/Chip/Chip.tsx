import { styled } from '@mui/material/styles';
import MuiChip, { ChipProps } from '@mui/material/Chip';

const ChipRoot = styled(MuiChip)(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  color: theme.palette.monoA.A900,
  border: `1px solid ${theme.palette.monoA.A50}`,
  borderRadius: '100px',
  marginBottom: '8px',
  ...theme.typography.caption,
  ':last-of-type': {
    marginRight: '4px !important'
  }
})) as typeof MuiChip;

export const Chip = (inProps: ChipProps) => {
  return <ChipRoot {...inProps} />;
};
