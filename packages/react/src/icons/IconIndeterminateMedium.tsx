import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconIndeterminateMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="20" viewBox="0 0 20 20" width="20" {...props}>
      <rect height="17" rx="3.5" stroke="currentColor" width="17" x="1.5" y="1.5" />
      <path d="M6 10H14" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
