import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckboxIndeterminate = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect fill="currentColor" height="18" rx="3" width="18" />
      <rect height="16" rx="3" stroke={theme.palette.monoA.A500} strokeWidth="1" width="16" x="1" y="1" />
      <rect fill={theme.palette.monoB[500]} height="2" rx="1" width="10" x="4" y="8" />
    </SvgIcon>
  );
};
