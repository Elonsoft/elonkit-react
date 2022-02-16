import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagHk = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="M12.826 6.052c-.181.756-.504.612-.663 1.271a1.74 1.74 0 0 1 .813-3.382c-.317 1.32.013 1.434-.15 2.11ZM10.403 6.612c.663.406.426.67 1.005 1.024a1.74 1.74 0 0 1-2.966-1.819c1.157.71 1.368.431 1.961.795ZM10.187 9.09c.592-.505.769-.199 1.284-.639a1.74 1.74 0 1 1-2.645 2.258c1.032-.88.832-1.168 1.361-1.62ZM12.477 10.06c-.297-.718.049-.791-.21-1.418a1.74 1.74 0 0 1 1.33 3.214c-.519-1.253-.854-1.152-1.12-1.795ZM14.108 8.183c-.775.06-.738-.291-1.414-.238a1.74 1.74 0 0 1 3.468-.272c-1.353.106-1.36.456-2.054.51Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
