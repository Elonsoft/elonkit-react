import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconSuccessLine = (props: SvgIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <circle cx="28" cy="28" r="27" stroke="currentColor" strokeWidth="2" />
      <path d="M16.625 27.125L25.375 35.875L40.25 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
