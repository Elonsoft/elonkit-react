import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagLv = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333Z" fill="#A2001D" />
    </FlagRoot>
  );
};
