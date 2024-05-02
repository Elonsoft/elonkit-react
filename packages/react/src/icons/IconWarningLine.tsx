import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconWarningLine = (props: SvgIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M22.2138 6.12652C24.8245 1.62449 31.1754 1.62449 33.7862 6.12653L54.0408 41.0542C56.7321 45.6951 53.439 51.5 48.2546 51.5H7.74537C2.56103 51.5 -0.732103 45.6951 1.95917 41.0542L22.2138 6.12652Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M28 18.375V33.25" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M28 38.5V40.25" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
