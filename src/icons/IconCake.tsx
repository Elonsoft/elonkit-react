import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCake = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 8C12.74 8 13.3333 7.4 13.3333 6.66667C13.3333 6.41333 13.2667 6.18 13.14 5.98L12 4L10.86 5.98C10.7333 6.18 10.6667 6.41333 10.6667 6.66667C10.6667 7.4 11.2667 8 12 8ZM16 10H12.6667V8.66667H11.3333V10H8C6.89333 10 6 10.8933 6 12V18C6 18.3667 6.3 18.6667 6.66667 18.6667H17.3333C17.7 18.6667 18 18.3667 18 18V12C18 10.8933 17.1067 10 16 10ZM16.6667 17.3333H7.33333V15.3333C7.93333 15.3333 8.50667 15.0867 8.93333 14.6667L9.66667 13.9467L10.3733 14.6667C11.2467 15.5333 12.7667 15.5267 13.6333 14.6667L14.3533 13.9467L15.0667 14.6667C15.4933 15.0867 16.0667 15.3333 16.6667 15.3333V17.3333ZM16.6667 14.3333C16.3333 14.3333 16 14.2 15.7667 13.9533L14.3333 12.5333L12.92 13.9533C12.4267 14.4467 11.5667 14.4467 11.0733 13.9533L9.66667 12.5333L8.22667 13.9533C8 14.1933 7.66667 14.3333 7.33333 14.3333V12C7.33333 11.6333 7.63333 11.3333 8 11.3333H16C16.3667 11.3333 16.6667 11.6333 16.6667 12V14.3333Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
