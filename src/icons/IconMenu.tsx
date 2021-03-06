import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconMenu = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 7V5H21V7H3Z" fill="currentColor" />
      <path d="M3 13H21V11H3V13Z" fill="currentColor" />
      <path d="M3 19H21V17H3V19Z" fill="currentColor" />
    </SvgIcon>
  );
};
