import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconBreadcrumbsMenu = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      style={{ width: `${props.width || 20}px`, height: `${props.height || 20}px` }}
      {...props}
    >
      <path d="M6 8L10 12.5L14 8H6Z" fill="currentColor" />;
    </SvgIcon>
  );
};
