import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconArrowUpRounded = (props: SvgIconProps) => {
  return (
    <SvgIcon height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M9.5 11.5029L11.998 9M11.998 9L14.5 11.5029M11.998 9V15.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </SvgIcon>
  );
};
