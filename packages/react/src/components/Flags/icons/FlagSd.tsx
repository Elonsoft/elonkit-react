import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSd = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.666H0V16h24v-5.334Z" fill="#000" />
      <path d="M0 16V0l12 8-12 8Z" fill="#496E2D" />
    </FlagRoot>
  );
};
