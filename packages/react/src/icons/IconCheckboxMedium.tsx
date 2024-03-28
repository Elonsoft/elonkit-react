import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckboxMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="20" viewBox="0 0 20 20" width="20" {...props}>
      <rect height="16" rx="3" stroke="currentColor" strokeWidth="2" width="16" x="2" y="2" />
      <path d="M14 7.5L9 12.5L6 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
