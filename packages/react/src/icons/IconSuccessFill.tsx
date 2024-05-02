import { useTheme } from '@mui/material';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconSuccessFill = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <circle cx="28" cy="28" fill="currentColor" r="28" />
      <path
        d="M16.625 27.125L25.375 35.875L40.25 21"
        stroke={theme.palette.monoB[500]}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </SvgIcon>
  );
};
