import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGu = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.478.521H2.521c-1.104 0-2 .898-2 2.004v10.95c0 1.106.896 2.003 2 2.003h18.957c1.105 0 2-.897 2-2.004V2.525a2.002 2.002 0 0 0-2-2.004Zm-9.93 12.528c-.11-.093-2.679-2.326-2.679-5.05 0-2.723 2.569-4.956 2.678-5.05L12 2.563l.453.388c.109.093 2.677 2.326 2.677 5.05 0 2.723-2.568 4.956-2.677 5.05l-.453.387-.453-.388Zm2.342-2.963c.316-.63.544-1.342.544-2.087h-4.87c0 .745.229 1.457.545 2.087l1.89.348 1.891-.348Z"
        fill="#0052B4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.478s2.434 2.087 2.434 4.521h-4.87C9.564 5.565 12 3.478 12 3.478Zm-1.89 6.609h-.001c-.316-.63-.545-1.342-.545-2.087 0 .744.229 1.456.545 2.086h.001Zm3.778 0h.002c.316-.63.544-1.342.544-2.087 0 .744-.228 1.457-.544 2.086h-.002Z"
        fill="#338AF3"
      />
      <path d="M10.435 6.608h3.131l-1.565 1.566-1.566-1.566Z" fill="#6DA544" />
      <path d="M12.522 7.651h-1.043v3.13h1.043v-3.13Z" fill="#A2001D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.11 10.086c.717 1.43 1.89 2.435 1.89 2.435s1.173-1.005 1.89-2.435l-1.89.348-1.89-.348Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
