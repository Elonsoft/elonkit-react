import { useTheme } from '@mui/material';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconInfo2Fill = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="currentColor"
      />
      <path
        d="M28 24L30 24C30 22.8954 29.1046 22 28 22L28 24ZM25 22C23.8954 22 23 22.8954 23 24C23 25.1046 23.8954 26 25 26L25 22ZM31 40C32.1046 40 33 39.1046 33 38C33 36.8954 32.1046 36 31 36L31 40ZM25 36C23.8954 36 23 36.8954 23 38C23 39.1046 23.8954 40 25 40L25 36ZM26 24L26 38L30 38L30 24L26 24ZM28 22L25 22L25 26L28 26L28 22ZM28 40L31 40L31 36L28 36L28 40ZM28 36L25 36L25 40L28 40L28 36Z"
        fill={theme.palette.monoB[500]}
      />
      <path d="M28 16.5V16.5088" stroke={theme.palette.monoB[500]} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
