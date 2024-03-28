import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCheckMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="20" viewBox="0 0 20 20" width="20" {...props}>
      <path d="M14 7.5L9 12.5L6 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
