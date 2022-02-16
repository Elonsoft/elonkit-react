import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagSg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h24v8H0V0Zm5.826 1.622a2.435 2.435 0 0 0 0 4.756 2.435 2.435 0 1 1 0-4.756Zm1.39.649-.172-.532-.173.532h-.559l.452.328-.173.532.453-.329.452.329-.173-.532.452-.328h-.559Zm-1.528.511.173.532h.558l-.452.328.173.532-.452-.329-.452.329.173-.532-.452-.328h.558l.173-.532Zm2.884.532-.173-.532-.173.532h-.558l.452.328-.173.532.452-.329.452.329-.173-.532.452-.328h-.558Zm-.695 1.034.173.531h.559l-.452.329.172.531-.452-.328-.452.328.173-.531-.452-.329h.559l.172-.531Zm-1.495.531-.172-.531-.173.531h-.559l.452.329-.172.531.452-.328.452.328-.173-.531.452-.329h-.559Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
