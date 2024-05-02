import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

interface DuoColorIconProps extends SvgIconProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const IconInfoDuo = ({
  primaryColor = 'currentColor',
  secondaryColor = 'currentColor',
  ...props
}: DuoColorIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M56 28C56 43.4639 43.464 56 28 56C12.536 56 0 43.4639 0 28C0 12.536 12.536 -4.95911e-05 28 -4.95911e-05C43.464 -4.95911e-05 56 12.536 56 28Z"
        fill={primaryColor}
        fillOpacity="0.12"
      />
      <path d="M28 24.5V38.5" stroke={secondaryColor} strokeLinecap="round" strokeWidth="4" />
      <path d="M28 16.625V16.6338" stroke={secondaryColor} strokeLinecap="round" strokeWidth="4" />
    </SvgIcon>
  );
};
