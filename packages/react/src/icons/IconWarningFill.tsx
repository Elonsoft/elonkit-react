import { useTheme } from '@mui/material';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconWarningFill = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M34.6513 5.62487C31.6552 0.45838 24.3448 0.458374 21.3487 5.62487L1.0941 40.5526C-1.96404 45.8261 1.75138 52.5 7.74537 52.5H48.2546C54.2486 52.5 57.964 45.8261 54.9059 40.5526L34.6513 5.62487Z"
        fill="currentColor"
      />
      <path d="M28 18.375V32.375" stroke={theme.palette.monoB[500]} strokeLinecap="round" strokeWidth="4" />
      <path d="M28 40.2412V40.25" stroke={theme.palette.monoB[500]} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
