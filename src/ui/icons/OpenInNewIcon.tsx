import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const OpenInNewIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" sx={{ fontSize: 20 }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2499 4.00019H9.74994V5.50019H13.4393L8.46961 10.4699L9.53027 11.5305L14.4999 6.56085V10.2502H15.9999V4.75019V4.00019H15.2499ZM6.74994 5.50019C5.23116 5.50019 3.99994 6.73141 3.99994 8.25019V13.2502C3.99994 14.769 5.23116 16.0002 6.74994 16.0002H11.7499C13.2687 16.0002 14.4999 14.769 14.4999 13.2502V12.2502H12.9999V13.2502C12.9999 13.9405 12.4403 14.5002 11.7499 14.5002H6.74994C6.05958 14.5002 5.49994 13.9405 5.49994 13.2502V8.25019C5.49994 7.55984 6.05958 7.00019 6.74994 7.00019H7.74994V5.50019H6.74994Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
