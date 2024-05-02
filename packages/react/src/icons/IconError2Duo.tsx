import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

interface DuoColorIconProps extends SvgIconProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const IconError2Duo = ({
  primaryColor = 'currentColor',
  secondaryColor = 'currentColor',
  ...props
}: DuoColorIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <circle cx="28" cy="28" fill={primaryColor} fillOpacity="0.12" r="28" />
      <path d="M37.625 18.375L18.375 37.625" stroke={secondaryColor} strokeLinecap="round" strokeWidth="4" />
      <path d="M18.375 18.375L37.625 37.625" stroke={secondaryColor} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
