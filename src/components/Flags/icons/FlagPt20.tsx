import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagPt20 = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M11.077 0H0v16h11.077V0Z" fill="#0052B4" />
      <path d="M8.033 2.783v1.304a1.174 1.174 0 0 0 2.348 0V2.783H8.033Z" fill="#D80027" />
      <path d="M9.207 4.566a.479.479 0 0 1-.478-.479V3.48h.956v.608a.479.479 0 0 1-.478.479Z" fill="#F0F0F0" />
      <path
        d="M13.859 8.348h-2.087a.696.696 0 0 0-1.392 0H8.294c0 .384.334.696.718.696H8.99c0 .384.312.695.696.695 0 .385.311.696.695.696h1.392a.696.696 0 0 0 .695-.696.696.696 0 0 0 .696-.695h-.023c.384 0 .719-.312.719-.696ZM14.145 7.235l-.183.292.222.264-.335-.083-.183.292-.024-.343-.334-.084.32-.13-.025-.343.222.264.32-.129ZM13.079 6.34l-.072.338.299.172-.343.036-.072.337-.14-.315-.343.036.256-.23-.14-.315.299.172.256-.23ZM11.772 5.865l.048.341.339.06-.31.151.048.342-.24-.248-.31.15.163-.304-.24-.248.34.06.162-.304ZM10.38 5.865l.162.304.34-.06-.24.248.162.305-.31-.151-.24.247.049-.34-.31-.152.34-.06.047-.341ZM9.073 6.34l.256.231.299-.172-.14.315.256.23-.343-.036-.14.315-.072-.337-.343-.036.299-.172-.072-.338ZM8.008 7.235l.32.129.22-.264-.023.344.32.129-.335.083L8.486 8l-.183-.292-.334.083.221-.264-.182-.292Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
