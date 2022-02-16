import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagKr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#fff" />
      <path
        d="M14.922 8c0 .73-1.309 2.556-2.922 2.556-1.614 0-2.922-1.826-2.922-2.557a2.922 2.922 0 1 1 5.844 0Z"
        fill="#D80027"
      />
      <path d="M14.922 8a2.922 2.922 0 0 1-5.844 0" fill="#0052B4" />
      <path
        d="m15.874 9.808-.775.774.517.517.774-.775-.516-.516ZM14.583 11.098l-.775.775.516.516.775-.774-.516-.517ZM17.424 11.356l-.775.775.516.516.775-.775-.517-.516ZM16.132 12.648l-.775.774.517.517.774-.775-.516-.516ZM16.649 10.582l-.775.775.516.516.775-.774-.516-.517ZM15.357 11.873l-.774.775.516.516.775-.774-.517-.517ZM14.583 3.35l2.066 2.067.517-.517L15.1 2.834l-.517.517ZM13.808 4.126l.775.774.516-.516-.774-.775-.517.517ZM15.099 5.417l.775.775.516-.516-.775-.775-.516.516ZM15.357 2.576l.774.775.517-.516-.775-.775-.516.516ZM16.648 3.867l.775.775.517-.516-.775-.775-.517.516ZM8.643 13.422l-2.066-2.066-.516.517 2.065 2.066.517-.517ZM9.417 12.648l-.775-.775-.516.516.775.775.516-.516ZM8.126 11.357l-.774-.775-.517.516.775.775.516-.516ZM10.193 11.873 8.127 9.807l-.517.517 2.066 2.066.517-.517ZM6.577 4.641l2.066-2.065-.516-.517L6.06 4.125l.516.516ZM7.351 5.417 9.417 3.35l-.516-.516L6.835 4.9l.516.517ZM8.126 6.191l2.066-2.066-.517-.516L7.61 5.675l.517.516Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
