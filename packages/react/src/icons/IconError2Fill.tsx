import { useTheme } from '@mui/material';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconError2Fill = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <circle cx="28" cy="28" fill="currentColor" r="28" />
      <path d="M37.625 18.375L18.375 37.625" stroke={theme.palette.monoB[500]} strokeLinecap="round" strokeWidth="4" />
      <path d="M18.375 18.375L37.625 37.625" stroke={theme.palette.monoB[500]} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
