import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckbox = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="18" viewBox="0 0 18 18" width="18" {...props}>
      <rect height="16" rx="3" stroke="currentColor" strokeWidth="2" width="16" x="1" y="1" />
      <circle cx="9" cy="9" height="9" r="10" stroke="transparent" strokeWidth="1.8" width="9" />
      <path d="M13 6.5L8 11.5L5 8.5" stroke="white" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
