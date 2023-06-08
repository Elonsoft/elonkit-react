import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconBall = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M12 20C13.8377 20 15.5358 19.372 16.8904 18.3201L16.8798 18.3089C16.608 18.019 16.2539 17.593 15.902 17.03C15.1957 15.8999 14.5 14.2188 14.5 12C14.5 9.78121 15.1957 8.10005 15.902 6.97C16.2539 6.40695 16.608 5.98098 16.8798 5.69106L16.8904 5.67987C15.5358 4.62795 13.8377 4 12 4C10.1623 4 8.46423 4.62795 7.10965 5.67987C7.11314 5.68358 7.11665 5.68731 7.12016 5.69106C7.39196 5.98098 7.74609 6.40695 8.098 6.97C8.80428 8.10005 9.5 9.78121 9.5 12C9.5 14.2188 8.80428 15.8999 8.098 17.03C7.74609 17.593 7.39196 18.019 7.12016 18.3089C7.11664 18.3127 7.11314 18.3164 7.10965 18.3201C8.46423 19.372 10.1623 20 12 20ZM5.69279 16.9069C5.88655 16.6966 6.14328 16.384 6.402 15.97C6.94572 15.1001 7.5 13.7812 7.5 12C7.5 10.2188 6.94572 8.89995 6.402 8.03C6.14328 7.61604 5.88656 7.30344 5.69279 7.09306C4.63309 8.45035 4 10.1548 4 12C4 13.8452 4.63309 15.5496 5.69279 16.9069ZM20 12C20 13.8452 19.3669 15.5496 18.3072 16.9069C18.1134 16.6966 17.8567 16.384 17.598 15.97C17.0543 15.1001 16.5 13.7812 16.5 12C16.5 10.2188 17.0543 8.89995 17.598 8.03C17.8567 7.61605 18.1134 7.30345 18.3072 7.09306C19.3669 8.45036 20 10.1548 20 12ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
