import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M10.119 8 0 14.746V1.254L10.119 8ZM24 1.254v13.492L13.881 8 24 1.254Z" fill="#6DA544" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.34 7.027 24 1.254V0h-1.88l-7.937 5.291A3.464 3.464 0 0 0 12 4.521c-.827 0-1.586.288-2.183.77L1.881 0H0v1.254l8.66 5.773a3.48 3.48 0 0 0 0 1.946L0 14.746V16h1.88l7.938-5.291c.597.48 1.356.769 2.182.769.826 0 1.585-.288 2.182-.77L22.119 16H24v-1.254l-8.66-5.773a3.482 3.482 0 0 0 0-1.946ZM12 5.565l.301.522h.603l-.302.521.302.522H12.3L12 7.652l-.301-.522h-.603l.302-.522-.302-.521h.603L12 5.565ZM10.469 8l.301.522h.603l-.302.521.302.522h-.603l-.301.522-.301-.522h-.603l.301-.522-.3-.521h.602l.3-.522Zm3.363.522L13.531 8l-.301.522h-.603l.301.521-.3.522h.602l.301.522.301-.522h.603l-.302-.522.302-.521h-.603Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
