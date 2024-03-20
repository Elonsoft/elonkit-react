import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconIndeterminateSmallOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <rect height="13" rx="3.5" stroke="currentColor" width="13" x="1.5" y="1.5" />
      <path d="M5 8H11" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
