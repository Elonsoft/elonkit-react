import { cloneElement, forwardRef, isValidElement, ReactElement, ReactNode, useRef } from 'react';

import { ChipProps, ChipTypeMap } from './Chip.types';

import clsx from 'clsx';
import { chipClasses, getChipUtilityClass } from './Chip.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { capitalize, useForkRef } from '@mui/material/utils';

import { IconCloseLineW350 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { ButtonBase, buttonBaseClasses } from '../ButtonBase';

type ChipOwnerState = {
  classes?: ChipProps['classes'];
  clickable?: ChipProps['clickable'];
  disabled?: ChipProps['disabled'];
  selected?: ChipProps['selected'];
  selectedColor: NonNullable<ChipProps['selectedColor']>;
  size: NonNullable<ChipProps['size']>;
  variant: NonNullable<ChipProps['variant']>;
};

const useUtilityClasses = (ownerState: ChipOwnerState) => {
  const { classes, clickable, disabled, selected, selectedColor, size, variant } = ownerState;

  const slots = {
    root: [
      'root',
      clickable && 'clickable',
      disabled && 'disabled',
      selected && 'selected',
      selected && `selectedColor${capitalize(selectedColor)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`,
    ],
    label: ['label'],
    startIcon: ['startIcon'],
    endIcon: ['endIcon'],
    deleteIcon: ['deleteIcon'],
    deleteIconWrapper: ['deleteIconWrapper'],
  };

  return composeClasses(slots, getChipUtilityClass, classes);
};

export const ChipRoot = styled('div', {
  name: 'ESChip',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  transition: theme.transitions.create(['background-color', 'color']),
  maxWidth: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  cursor: 'default',
  outline: 0,
  textDecoration: 'none',
  border: 0,
  padding: 0,
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  borderRadius: '100px',
  color: theme.vars.palette.monoA.A400,

  [`&.${chipClasses.clickable}`]: {
    cursor: 'pointer',
  },

  [`&.${chipClasses.variantFilled}`]: {
    '--background': theme.vars.palette.monoA.A75,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,

    [`&:not(.${chipClasses.clickable})`]: {
      backgroundColor: theme.vars.palette.monoA.A75,
    },

    [`&.${chipClasses.disabled}`]: {
      '--background': theme.vars.palette.monoA.A50,

      [`& .${buttonBaseClasses.wrapper}`]: {
        [`& .${chipClasses.label}`]: {
          color: theme.vars.palette.monoA.A400,
        },

        [`& .${chipClasses.startIcon}, & .${chipClasses.endIcon}`]: {
          opacity: 0.4,
        },
      },

      [`&:not(.${chipClasses.clickable})`]: {
        backgroundColor: theme.vars.palette.monoA.A50,
      },
    },

    [`&.${chipClasses.selected}`]: {
      [`&.${chipClasses.selectedColorDefault}`]: {
        '--background': theme.vars.palette.monoA.A100,

        [`&.${chipClasses.disabled}`]: {
          '--background': theme.vars.palette.monoA.A75,
        },
      },

      [`&.${chipClasses.selectedColorColored}`]: {
        '--background': theme.vars.palette.secondary.A300,

        [`&.${chipClasses.disabled}`]: {
          '--background': theme.vars.palette.secondary.A100,
        },
      },
    },
  },

  [`&.${chipClasses.variantOutlined}`]: {
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A150}`,

    [`&:not(.${chipClasses.clickable})`]: {
      backgroundColor: 'transparent',
    },

    [`&.${chipClasses.disabled}`]: {
      boxShadow: `inset 0px 0px 0px 1px  ${theme.vars.palette.monoA.A100}`,

      [`& .${buttonBaseClasses.wrapper}`]: {
        [`& .${chipClasses.label}`]: {
          color: theme.vars.palette.monoA.A400,
        },

        [`& .${chipClasses.startIcon}, & .${chipClasses.endIcon}`]: {
          opacity: 0.4,
        },
      },
    },

    [`&.${chipClasses.selected}`]: {
      [`&.${chipClasses.selectedColorDefault}`]: {
        '--background': theme.vars.palette.monoA.A75,

        [`&.${chipClasses.disabled}`]: {
          '--background': theme.vars.palette.monoA.A50,
        },
      },

      [`&.${chipClasses.selectedColorColored}`]: {
        '--background': theme.vars.palette.secondary.A300,

        [`&.${chipClasses.disabled}`]: {
          '--background': theme.vars.palette.secondary.A50,
        },
      },
    },
  },

  [`&.${chipClasses.disabled}`]: {
    pointerEvents: 'none',

    '&[aria-disabled="true"]:focus-visible': {
      outline: 'none',
    },

    [`& .${chipClasses.label}`]: {
      color: theme.vars.palette.monoA.A400,
    },

    [`& .${chipClasses.startIcon}, & .${chipClasses.endIcon}`]: {
      opacity: 0.4,
    },
  },

  [`&.${chipClasses.size100}`]: {
    height: 24,

    [`&:has(.${chipClasses.startIcon})`]: {
      paddingLeft: 2,

      [`& .${chipClasses.label}`]: {
        paddingLeft: 6,
      },
    },

    [`&:has(.${chipClasses.endIcon})`]: {
      paddingRight: 2,

      [`& .${chipClasses.label}`]: {
        paddingRight: 6,
      },
      [`& .${chipClasses.deleteIcon}`]: {
        paddingLeft: 4,
      },
    },

    [`&:has(.${chipClasses.deleteIcon})`]: {
      paddingRight: 0,

      [`& .${chipClasses.label}`]: {
        paddingRight: 4,
      },
    },

    [`&:has(.${chipClasses.endIcon} + .${chipClasses.deleteIcon})`]: {
      [`& .${chipClasses.label}`]: {
        paddingRight: 6,
      },
    },

    [`& .${chipClasses.deleteIcon}`]: {
      [`& .${buttonBaseClasses.wrapper}`]: {
        padding: '0 4px',
      },
    },
  },

  [`&.${chipClasses.size200}`]: {
    height: 32,

    [`& .${chipClasses.label}`]: {
      padding: '0 12px',
    },

    [`&:has(.${chipClasses.startIcon})`]: {
      paddingLeft: 4,

      [`& .${chipClasses.label}`]: {
        paddingLeft: 8,
      },
    },

    [`&:has(.${chipClasses.endIcon})`]: {
      paddingRight: 4,

      [`& .${chipClasses.label}`]: {
        paddingRight: 8,
      },
      [`& .${chipClasses.deleteIcon}`]: {
        paddingLeft: 6,
      },
    },

    [`&:has(.${chipClasses.deleteIcon})`]: {
      paddingRight: 4,

      [`& .${chipClasses.label}`]: {
        paddingRight: 6,
      },
    },

    [`&:has(.${chipClasses.endIcon} + .${chipClasses.deleteIcon})`]: {
      [`& .${chipClasses.label}`]: {
        paddingRight: 8,
      },
    },

    [`& .${chipClasses.deleteIconWrapper}`]: {
      paddingRight: 1,

      [`& .${chipClasses.deleteIcon} .${buttonBaseClasses.wrapper}`]: {
        padding: '0 4px',
      },
    },
  },

  [`&.${chipClasses.size300}`]: {
    height: 40,

    [`& .${chipClasses.label}`]: {
      padding: '0 12px',
    },

    [`&:has(.${chipClasses.startIcon})`]: {
      paddingLeft: 4,

      [`& .${chipClasses.label}`]: {
        paddingLeft: 8,
      },
    },

    [`&:has(.${chipClasses.endIcon})`]: {
      paddingRight: 4,

      [`& .${chipClasses.label}`]: {
        paddingRight: 8,
      },
      [`& .${chipClasses.deleteIcon}`]: {
        paddingLeft: 6,
      },
    },

    [`&:has(.${chipClasses.deleteIcon})`]: {
      paddingRight: 4,

      [`& .${chipClasses.label}`]: {
        paddingRight: 6,
      },
    },

    [`&:has(.${chipClasses.endIcon} + .${chipClasses.deleteIcon})`]: {
      [`& .${chipClasses.label}`]: {
        paddingRight: 8,
      },
    },

    [`& .${chipClasses.deleteIconWrapper}`]: {
      height: 32,
      paddingRight: 5,
      paddingLeft: 4,

      [`& .${chipClasses.deleteIcon} .${buttonBaseClasses.wrapper}`]: {
        padding: '0 4px',
      },
    },
  },

  [`& .${chipClasses.deleteIcon}.${buttonClasses.variantText}.${buttonClasses.colorTertiary}`]: {
    borderRadius: '50%',
    '--icon': theme.vars.palette.monoA.A400,
  },
}));

export const ChipLabel = styled('span', {
  name: 'ESChip',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label,
})<{ ownerState: ChipOwnerState }>(({ theme }) => ({
  ...theme.typography.body100,
  color: theme.vars.palette.monoA.A900,
  display: 'block',
  padding: '0 8px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const ChipDeleteIconWrapper = styled('div', {
  name: 'ESChip',
  slot: 'DeleteIconWrapper',
  overridesResolver: (props, styles) => styles.label,
})(() => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function isDeleteKeyboardEvent(event: React.KeyboardEvent) {
  return event.key === 'Backspace' || event.key === 'Delete';
}

/**
 *
 * Chips are compact elements that represent an input, attribute, or action.
 */
export const Chip = forwardRef(function Chip(inProps: ChipProps, ref) {
  const {
    className,
    classes: inClasses,
    children,
    sx,
    size = '100',
    variant = 'filled',
    disabled,
    selected,
    selectedColor = 'default',
    onDelete,
    startIcon: inStartIcon,
    endIcon: inEndIcon,
    iconDelete: inIconDelete,
    clickable: inClickable,
    onKeyDown,
    onKeyUp,
    onClick,
    component: InComponent,
    focusableWhenDisabled = true,
    tabIndex,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESChip',
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;
  const component = clickable ? ButtonBase : InComponent || 'div';

  const chipRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(chipRef, ref);

  const ownerState = { classes: inClasses, size, variant, selected, selectedColor, disabled, clickable };
  const classes = useUtilityClasses(ownerState);

  const disabledProp =
    clickable && disabled ? (focusableWhenDisabled ? { 'aria-disabled': true } : { disabled: true }) : {};

  const onStopRipple = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleDeleteIconClick = (event: React.MouseEvent) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Ignore key press if aria-disabled is used
    if (focusableWhenDisabled && disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
    }

    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete();
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  const moreProps =
    component === ButtonBase
      ? {
          component: InComponent || 'div',
        }
      : {};

  let deleteIcon = null;

  if (onDelete) {
    deleteIcon = (
      <ChipDeleteIconWrapper className={classes.deleteIconWrapper}>
        {inIconDelete && isValidElement(inIconDelete) ? (
          cloneElement(inIconDelete as ReactElement, {
            className: clsx(inIconDelete.props.className, classes.deleteIcon),
            onClick: handleDeleteIconClick,
            onPointerDown: onStopRipple,
          })
        ) : (
          <Button
            className={clsx(classes.deleteIcon)}
            component="div"
            size="300"
            tabIndex={-1}
            onClick={handleDeleteIconClick}
            onPointerDown={onStopRipple}
          >
            <IconCloseLineW350 />
          </Button>
        )}
      </ChipDeleteIconWrapper>
    );
  }

  let startIcon: ReactNode | null = null;

  if (inStartIcon && isValidElement(inStartIcon)) {
    startIcon = cloneElement(inStartIcon as ReactElement, {
      className: clsx(inStartIcon.props.className, classes.startIcon),
    });
  }

  let endIcon: ReactNode | null = null;

  if (inEndIcon && isValidElement(inEndIcon)) {
    endIcon = cloneElement(inEndIcon as ReactElement, {
      className: clsx(inEndIcon.props.className, classes.endIcon),
    });
  }

  return (
    <ChipRoot
      ref={handleRef}
      as={component}
      className={clsx(classes.root, className)}
      {...disabledProp}
      sx={sx}
      tabIndex={!focusableWhenDisabled && disabled ? -1 : tabIndex}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...moreProps}
      {...props}
    >
      {startIcon}
      <ChipLabel className={classes.label} ownerState={ownerState}>
        {children}
      </ChipLabel>
      {endIcon}
      {deleteIcon}
    </ChipRoot>
  );
}) as OverridableComponent<ChipTypeMap>;
