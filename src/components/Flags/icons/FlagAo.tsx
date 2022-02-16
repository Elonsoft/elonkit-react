import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagAo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#000" />
      <path d="M24 0H0v8h24V0Z" fill="#D80027" />
      <path
        d="m10.903 6.363.678.492-.259.797.678-.493.678.492-.26-.797.679-.493h-.838l-.26-.796-.258.797h-.838Z"
        fill="#FFDA44"
      />
      <path
        d="M14 4.536A3.974 3.974 0 0 0 12 4v1.043c.502 0 1.012.126 1.478.395a2.96 2.96 0 0 1 1.082 4.039 2.96 2.96 0 0 1-4.039 1.082 2.937 2.937 0 0 1-.988-.932l-.87.575c.33.504.78.94 1.337 1.26A4.005 4.005 0 0 0 15.464 10 4.004 4.004 0 0 0 14 4.536Z"
        fill="#FFDA44"
      />
      <path
        d="M9.693 7.304c-.277.505-.09 1.14.415 1.416l3.389 1.852c-.23.421-.108.934.313 1.164l.915.501a.87.87 0 0 0 1.18-.345l.501-.916-6.713-3.672Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};