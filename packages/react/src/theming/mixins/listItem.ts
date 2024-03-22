import { touchRippleClasses } from '@mui/material';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';

export interface ListItemMixinStates {
  /** The background color of the element. */
  background: string;
  /** The text color of the element. */
  color?: string;
  /** The icon color of the element. */
  icon?: string;
  /** The hover color. */
  hover: string;
  /** The focus color. */
  focus: string;
  /** The active color. */
  active: string;
}

/**
 * The mixin that applies list item states.
 */
export const listItemMixin = (states: ListItemMixinStates) => {
  const { background, color, icon, hover, focus, active } = states;

  return {
    '&, &:hover, &:active': {
      backgroundColor: background
    },
    ...(color && {
      [`&, & .${listItemTextClasses.root}`]: {
        color
      }
    }),
    ...(icon && {
      [`& .${listItemIconClasses.root}`]: {
        color: icon
      }
    }),
    [`& .${touchRippleClasses.root}`]: {
      color: active,
      transform: 'translateZ(0)'
    },
    '@media (hover: hover)': {
      [`&:not(.${listItemButtonClasses.focusVisible}):hover .${touchRippleClasses.root}`]: {
        backgroundColor: hover
      }
    },
    [`&.${listItemButtonClasses.focusVisible}`]: {
      [`& .${touchRippleClasses.root}`]: {
        backgroundColor: focus
      }
    }
  } as React.CSSProperties;
};
