import { touchRippleClasses } from '@mui/material';
import { buttonClasses } from '@mui/material/Button';
export interface ButtonMixinStates {
  /** The background color of the element. */
  background: string;
  /** The text color of the element. */
  color: string;
  /** The hover color. */
  hover: string;
  /** The focus color. */
  focus: string;
  /** The active color. */
  active: string;
}

/**
 * The mixin that applies button states.
 */
export const buttonMixin = (states: ButtonMixinStates) => {
  const { background, color, hover, active, focus } = states;

  return {
    '&, &:not(:disabled):hover, &:not(:disabled):active': {
      backgroundColor: background,
      color
    },
    [`& .${touchRippleClasses.root}`]: {
      color: active
    },
    '@media (hover: hover)': {
      [`&:not(.${buttonClasses.focusVisible}):not(:disabled):hover .${touchRippleClasses.root}`]: {
        backgroundColor: hover
      }
    },
    [`&.${buttonClasses.focusVisible}`]: {
      [`& .${touchRippleClasses.root}`]: {
        backgroundColor: focus
      }
    }
  } as React.CSSProperties;
};
