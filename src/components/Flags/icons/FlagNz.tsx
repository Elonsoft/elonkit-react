import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagNz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path
        d="M12 0v1.433L9.883 2.609H12V5.39H9.23L12 6.931V8h-1.25L7.304 6.086V8h-2.61V5.723L.599 8H0V6.568L2.117 5.39H0V2.61h2.77L0 1.069V0h1.25l3.446 1.914V0h2.609v2.277L11.403 0H12Z"
        fill="#F0F0F0"
      />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304Z" fill="#F0F0F0" />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path d="M4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path
        d="m19.936 6.956.159.49h.514l-.416.301.159.489-.416-.302-.416.302.159-.489-.416-.302h.514l.159-.489ZM18.099 10.476l.238.733h.771l-.624.453.238.733-.623-.453-.624.453.238-.733-.623-.453h.77l.239-.733ZM18.168 4.717l.199.611h.642l-.52.378.199.61-.52-.377-.52.378.2-.611-.52-.378h.642l.198-.61ZM16.4 6.935l.239.733h.77l-.623.453.238.734-.623-.454-.624.454.238-.734-.624-.453h.771l.239-.733ZM6.75 0h-1.5v3.25H0v1.5h5.25V8h1.5V4.75H12v-1.5H6.75V0Z"
        fill="#D80027"
      />
      <path
        d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM3.368 5.39 0 7.263V8l4.696-2.61H3.368ZM4.696 2.609 0 0v.738l3.368 1.87h1.328ZM8.632 2.609 12 .738V0L7.304 2.609h1.328Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
