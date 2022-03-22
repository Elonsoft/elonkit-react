import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronLeftSeparator = (props: SvgIconProps) => {
  return (
    <SvgIcon width="16" height="24" viewBox="0 0 16 24" style={{ fill: 'none' }} {...props}>
      <path d="M6 8L10 12L6 16" />
    </SvgIcon>
  );
};
