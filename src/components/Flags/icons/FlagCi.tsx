import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H15.48v16H24V0Z" fill="#6DA544" />
      <path d="M8.522 0H0v16h8.522V0Z" fill="#FF9811" />
    </FlagRoot>
  );
};
