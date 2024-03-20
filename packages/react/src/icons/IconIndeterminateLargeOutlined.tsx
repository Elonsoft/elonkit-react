import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconIndeterminateLargeOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <rect height="21" rx="5.5" stroke="currentColor" width="21" x="1.5" y="1.5" />
      <path d="M7 12H17" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
    </SvgIcon>
  );
};
