import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconArrowLeftBold = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16" sx={{ fontSize: 16 }}>
      <path d="M3 8L7 4V7H14V9H7V12L3 8Z" fill="currentColor" />
    </SvgIcon>
  );
};
