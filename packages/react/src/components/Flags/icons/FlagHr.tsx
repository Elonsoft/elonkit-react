import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagHr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M9.217 5.217h2.04l-.185-1.39-.928-.696-.927.696v1.39ZM14.782 5.218h-2.04l.185-1.391.928-.696.927.696v1.39Z"
        fill="#338AF3"
      />
      <path
        d="M24 0H0v5.333h9.217V3.826l.928-.695.927.695.186 1.391h1.484l.185-1.39.928-.696.928.695v1.507H24V0Z"
        fill="#D80027"
      />
      <path
        d="M10.33 5.218H9.219V6.33h1.113V5.218ZM12.556 5.218h-1.113V6.33h1.113V5.218ZM14.783 5.218H13.67V6.33h1.113V5.218ZM11.443 6.33h-1.112v1.114h1.113V6.33ZM13.67 6.33h-1.114v1.114h1.114V6.33ZM10.33 7.444H9.219v1.113h1.113V7.444Z"
        fill="#D80027"
      />
      <path d="M11.444 8.556H10.33V9.67h1.113V8.556Z" fill="#D80027" />
      <path
        d="M12.557 7.444h-1.114v1.112h1.113V7.445ZM14.783 7.444H13.67v1.113h1.113V7.444ZM13.67 8.557h-1.114v1.112h1.114V8.557ZM12.557 9.67h-1.114v1.112h1.113V9.67ZM10.33 9.67H9.29c.095.413.283.792.54 1.112h.5V9.67ZM13.67 10.783h.5c.258-.321.445-.7.54-1.113h-1.04v1.113ZM10.33 10.782v.486a2.77 2.77 0 0 0 1.114.502v-.988H10.33ZM12.556 10.782v.988a2.77 2.77 0 0 0 1.114-.502v-.485h-1.114Z"
        fill="#D80027"
      />
      <path
        d="M9.741 10.667c.167.23.367.435.595.606l.487-.122.614.618a2.786 2.786 0 0 0 1.122 0l.702-.583.403.086c.227-.17.428-.375.594-.605H24V16H0v-5.333h9.741ZM12.928 5.217h-1.856v-1.39L12 3.13l.928.696v1.39Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};