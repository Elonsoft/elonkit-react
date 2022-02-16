import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagKz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="M9.253 8.458H7.5c0 .621.541 1.125 1.162 1.125h-.037c0 .621.504 1.125 1.125 1.125 0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125.621 0 1.125-.504 1.125-1.125h-.037c.62 0 1.162-.504 1.162-1.125h-1.753a3.115 3.115 0 0 1-5.494 0Z"
        fill="#FFDA44"
      />
      <path
        d="m15.088 6.695-1.262.51.672 1.053-1.37-.226-.174 1.191L12 8.347l-.954.876-.174-1.19-1.37.225.672-1.052-1.262-.511 1.262-.51-.672-1.053 1.37.226.174-1.191.954.876.955-.877.173 1.192 1.37-.226-.671 1.052 1.261.511Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
