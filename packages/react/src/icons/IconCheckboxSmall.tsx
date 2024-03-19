import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckboxSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <rect height="12" rx="3" stroke="currentColor" strokeWidth="2" width="12" x="2" y="2" />
      <path
        d="M11.131 6.37012L7.50092 10.0001L5.16602 7.66382"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </SvgIcon>
  );
};
