import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagSm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="M24 7.814V0H0v8.008l10.261-.083v-.273c0-.959.78-1.739 1.74-1.739.958 0 1.738.78 1.738 1.74v.244L24 7.814Z"
        fill="#F0F0F0"
      />
      <path
        d="m13.635 7.06 1.54-1.54c.411.61.651 1.343.651 2.132v1.043a3.833 3.833 0 0 1-2.546 3.606c.209.395.178.893-.12 1.264l-1.137-.911-1.137.911a1.157 1.157 0 0 1-.127-1.25 3.833 3.833 0 0 1-2.585-3.62V7.652c0-.789.24-1.522.65-2.132l1.54 1.54a1.73 1.73 0 0 0-.103.592v1.044h3.478V7.652c0-.207-.037-.407-.104-.592Z"
        fill="#6DA544"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.479a2.786 2.786 0 0 1-2.783-2.783V7.653a2.786 2.786 0 0 1 2.782-2.783 2.786 2.786 0 0 1 2.783 2.783v1.043a2.786 2.786 0 0 1-2.783 2.783Zm-1.74-2.783c0 .959.78 1.739 1.74 1.739.959 0 1.739-.78 1.739-1.739V7.653c0-.96-.78-1.74-1.74-1.74-.958 0-1.739.78-1.739 1.74v1.043Z"
        fill="#FFDA44"
      />
      <path
        d="M13.043 3.826a1.043 1.043 0 0 1 .696 1.821v.614H10.26v-.614a1.043 1.043 0 1 1 1.391-1.555V3.48h-.347v-.696h.348v-.348h.695v.348h.348v.696h-.348v.613a1.04 1.04 0 0 1 .696-.266Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
