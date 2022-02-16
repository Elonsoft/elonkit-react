import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTj = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.323h24V0Z" fill="#D80027" />
      <path d="M24 10.646H0v5.323h24v-5.323Z" fill="#6DA544" />
      <path
        d="M10.61 10.067h2.782v-1.18l-.556.278L12 8.332l-.835.833-.557-.278v1.18ZM9.017 8.679l.13.398h.419l-.34.245.13.398-.339-.246-.339.246.13-.398-.34-.245h.42l.13-.398ZM9.419 7.29l.13.398h.418l-.339.246.13.398-.34-.246-.338.246.13-.398-.34-.246h.42l.129-.398ZM10.567 6.249l.13.398h.418l-.339.246.13.397-.34-.245-.338.245.13-.397-.34-.246h.42l.129-.398ZM14.984 8.679l-.13.398h-.418l.338.245-.129.398.339-.246.34.246-.13-.398.339-.245h-.42l-.129-.398ZM14.582 7.29l-.129.398h-.419l.339.246-.13.398.34-.246.339.246-.13-.398.34-.246h-.42l-.13-.398ZM13.435 6.249l-.13.398h-.419l.34.246-.13.397.339-.245.339.245-.13-.397.34-.246h-.42l-.13-.398ZM12 5.728l.13.398h.42l-.34.246.13.397-.34-.245-.338.245.13-.397-.34-.246h.42L12 5.728Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};