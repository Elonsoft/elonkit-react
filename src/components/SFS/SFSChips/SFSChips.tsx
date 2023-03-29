import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Chips } from '../../Chips';

const SFSChipsRoot = styled('div')(() => ({}));

export const SFSChips = (inProps: any) => {
  const { children, onReset, labelReset } = useThemeProps({ props: inProps, name: 'ESSFSChips' });
  return (
    <SFSChipsRoot>
      <Chips>{children}</Chips>
      <Button onClick={onReset} aria-label={labelReset} />
    </SFSChipsRoot>
  );
};
