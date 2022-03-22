import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconUnion = (props: SvgIconProps) => {
  return (
    <SvgIcon width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M4.5 8.5C3.675 8.5 3 9.175 3 10C3 10.825 3.675 11.5 4.5 11.5C5.325 11.5 6 10.825 6 10C6 9.175 5.325 8.5 4.5 8.5ZM15.5 8.5C14.675 8.5 14 9.175 14 10C14 10.825 14.675 11.5 15.5 11.5C16.325 11.5 17 10.825 17 10C17 9.175 16.325 8.5 15.5 8.5ZM10 8.5C9.175 8.5 8.5 9.175 8.5 10C8.5 10.825 9.175 11.5 10 11.5C10.825 11.5 11.5 10.825 11.5 10C11.5 9.175 10.825 8.5 10 8.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
