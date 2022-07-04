import { styled } from '@mui/material/styles';

import { IconArrowExpandVariant } from '../../../icons';
import { SFSButton } from '../SFSButton';

const SFSExpandRoot = styled(SFSButton, {
  name: 'ESSFSExpand',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({ theme }) => ({
  [theme.breakpoints.down('tabletXS')]: {
    display: 'none'
  }
}));

export const SFSExpand = () => (
  <SFSExpandRoot>
    <IconArrowExpandVariant />
  </SFSExpandRoot>
);
