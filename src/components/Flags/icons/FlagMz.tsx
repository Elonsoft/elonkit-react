import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="m0 0 7.348 4.9H24V0H0Z" fill="#496E2D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.885h24v4.202H0V5.885ZM3.24 8h-1.4v1.404l1.403-1.402L3.24 8Zm-.56 1.902h2.466l-1.233-1.23-1.232 1.23Zm1.904-1.9 1.401 1.402V8H4.586l-.002.002Z"
        fill="#000"
      />
      <path
        d="m6.77 5.819-.672-.673-2.185 2.186-2.185-2.186-.673.673 2.188 2.183-2.188 2.187.673.664 2.185-2.181 2.185 2.18.673-.663-2.187-2.187L6.77 5.82Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8 0 16V0l12 8ZM6.77 5.82l-.672-.673-2.185 2.185-2.185-2.185-.673.672L3.24 8h-1.4v1.405l-.785.786.673.663.953-.951h2.465l.952.951.673-.663-.786-.786V8H4.586l2.185-2.18Z"
        fill="#A2001D"
      />
      <path
        d="M0 16h24v-4.87H7.304L0 16ZM3.913 5.146l.536 1.65-.536.536-.536-.536.536-1.65ZM4.586 8l.675-.674h1.652L5.985 8H4.586ZM2.68 9.902l-.463.462-.158.489 1.309-.951H2.68ZM4.458 9.902l1.309.95-.16-.489-.462-.461h-.687ZM1.84 8h1.4l-.675-.674H.913L1.84 8Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
