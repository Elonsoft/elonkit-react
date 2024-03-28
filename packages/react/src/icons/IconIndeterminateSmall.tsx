import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconIndeterminateSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path d="M5 8H11" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
