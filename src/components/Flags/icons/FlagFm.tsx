import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagFm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="m12 3.478.345 1.063h1.118l-.904.657.345 1.063L12 5.604l-.904.657.345-1.063-.904-.657h1.118L12 3.478ZM7.479 8l1.062-.345V6.537l.657.904 1.063-.345L9.604 8l.657.904-1.063-.345-.657.904V8.345L7.48 8ZM12 12.521l-.345-1.063h-1.118l.904-.657-.345-1.062.904.656.904-.656-.345 1.062.904.657h-1.117L12 12.521ZM16.522 8l-1.063.345v1.118l-.657-.904-1.063.345.657-.904-.657-.904 1.063.345.657-.904v1.117L16.522 8Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};