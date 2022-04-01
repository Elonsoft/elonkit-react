import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

const BreadcrumbsMenuItemRoot = styled(
  MenuItem,
  {}
)(({ theme }) => ({
  ...theme.typography.caption,
  justifyContent: 'space-between',
  padding: '8px 12px',
  minHeight: '32px',
  height: '32px',
  '& .BreadcrumbsHiddenMenuIcon': {
    color: theme.palette.monoA.A500,
    width: '20px',
    height: '20px',
    margin: '0 -6px 0 6px'
  }
}));

export const BreadcrumbsMenuItem: typeof MenuItem = ({ children, ...props }: any) => (
  <BreadcrumbsMenuItemRoot {...props}>{children}</BreadcrumbsMenuItemRoot>
);
