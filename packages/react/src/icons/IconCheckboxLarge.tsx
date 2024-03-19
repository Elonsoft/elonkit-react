import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckboxLarge = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <rect height="20" rx="5" stroke="currentColor" strokeWidth="2" width="20" x="2" y="2" />
      <path d="M16.7992 9L10.7992 15L7.19922 11.4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
    </SvgIcon>
  );
};
