import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconAlertLine = (props: SvgIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M55 28C55 42.9116 42.9117 55 28 55C13.0883 55 1 42.9116 1 28C1 13.0883 13.0883 0.999954 28 0.999954C42.9117 0.999954 55 13.0883 55 28Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M28 17.5V32.375" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M28 37.625V39.375" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
