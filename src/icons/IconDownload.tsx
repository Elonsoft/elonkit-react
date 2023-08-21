import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconDownload = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M13 5V11H14.17L12 13.17L9.83 11H11V5H13ZM15 3H9V9H5L12 16L19 9H15V3ZM19 18H5V20H19V18Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
