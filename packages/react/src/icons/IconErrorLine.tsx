import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconErrorLine = (props: SvgIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        d="M55 27.9998C55 42.9115 42.9117 54.9998 28 54.9998C20.5439 54.9998 13.7953 51.9789 8.90812 47.0917C4.02099 42.2046 1.00001 35.456 1 27.9998C1 13.0882 13.0883 0.99984 28 0.99984C35.4561 0.99984 42.2048 4.02082 47.0919 8.90796C51.979 13.7951 55 20.5437 55 27.9998Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M46.5 9.5L9 47" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </SvgIcon>
  );
};
