import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconArrowDownRounded = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.5 12.5001L12 15.0001M12 15.0001L14.5 12.5001M12 15.0001V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
