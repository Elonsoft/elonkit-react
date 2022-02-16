import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path
        d="M12 1.06V0h-1.06L7.5 2.293V0h-3v2.293L1.06 0H0v1.06L2.16 2.5H0v3h2.16L0 6.94V8h1.06L4.5 5.707V8h3V5.707L10.94 8H12V6.94L9.84 5.5H12v-3H9.84L12 1.06ZM18.522 6.087a.522.522 0 0 1-1.044 0v2.782h1.044V6.087Z"
        fill="#F0F0F0"
      />
      <path d="M6.75 0h-1.5v3.25H0v1.5h5.25V8h1.5V4.75H12v-1.5H6.75V0Z" fill="#D80027" />
      <path d="M0 0v.708L2.69 2.5h1.06L0 0ZM12 0v.707L9.31 2.5H8.25L12 0Z" fill="#D80027" />
      <path
        d="M0 0v.708L2.69 2.5h1.06L0 0ZM12 0v.707L9.31 2.5H8.25L12 0ZM0 8v-.707L2.69 5.5h1.06L0 8ZM12 8v-.707L9.31 5.5H8.25L12 8Z"
        fill="#D80027"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.565 8.174V4.348h4.869v3.826c0 1.864-2.435 2.435-2.435 2.435s-2.434-.571-2.434-2.435Zm2.434-1.565a.522.522 0 0 0 .522-.522v2.782h-1.044V6.087c0 .288.234.522.522.522Z"
        fill="#6DA544"
      />
      <path d="M18 6.609a.522.522 0 1 0 0-1.044.522.522 0 0 0 0 1.044Z" fill="#A2001D" />
      <path
        d="M16.376 9.798c.708.596 1.624.81 1.624.81s.916-.214 1.624-.81l.539.538a2.434 2.434 0 0 1-4.325 0l.538-.538ZM16.957 5.043h-.696v.696h.696v-.696ZM16.957 6.608h-.696v.696h.696v-.696ZM16.957 8.174h-.696v.695h.696v-.695ZM19.74 5.043h-.696v.696h.695v-.696ZM19.74 6.608h-.696v.696h.695v-.696ZM19.74 8.174h-.696v.695h.695v-.695Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
