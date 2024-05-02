import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

interface DuoColorIconProps extends SvgIconProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const IconSuccessDuo = ({
  primaryColor = 'currentColor',
  secondaryColor = 'currentColor',
  ...props
}: DuoColorIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <circle cx="28" cy="28" fill={primaryColor} fillOpacity="0.12" r="28" />
      <path d="M16.625 27.125L25.375 35.875L40.25 21" stroke={secondaryColor} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
