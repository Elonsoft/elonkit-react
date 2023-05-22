import { cloneElement, forwardRef, isValidElement, ReactNode, useRef } from 'react';

import { ChipProps, ChipTypeMap } from './Chip.types';

import clsx from 'clsx';
import { getChipUtilityClass } from './Chip.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { IconButton } from '@mui/material';
import ButtonBase, { buttonBaseClasses, touchRippleClasses } from '@mui/material/ButtonBase';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { capitalize, useForkRef } from '@mui/material/utils';

import { IconChipsClose } from '../../icons';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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
      `variant${capitalize(variant)}`
    ],
    label: ['label'],
    startIcon: ['startIcon'],
    endIcon: ['endIcon'],
    deleteIcon: ['deleteIcon']
  };

  return composeClasses(slots, getChipUtilityClass, classes);
};

export const ChipRoot = styled('div', {
  name: 'ESChip',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: ChipOwnerState }>(({ theme, ownerState }) => ({
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

  [`&.${buttonBaseClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      transitionDuration: `${theme.transitions.duration.short}ms`
    }
  },

  [`& .${touchRippleClasses.rippleVisible}`]: {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },

  ...theme.mixins.button({
    background: ownerState.variant === 'filled' ? theme.palette.monoA.A75 : 'transparent',
    color: theme.palette.monoA.A400,
    hover: theme.palette.monoA.A50,
    focus: theme.palette.monoA.A200,
    active: theme.palette.monoA.A150
  }),

  ...(ownerState.clickable && {
    cursor: 'pointer'
  }),

  ...(ownerState.variant === 'filled' && {
    backgroundColor: theme.palette.monoA.A75
  }),

  ...(ownerState.variant === 'outlined' && {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.monoA.A150}`
  }),

  ...(ownerState.selected && {
    ...(ownerState.selectedColor === 'default' && {
      '&, &:not(:disabled):hover, &:not(:disabled):active': {
        backgroundColor: theme.palette.monoA.A100
      }
    }),
    ...(ownerState.selectedColor === 'colored' && {
      '&, &:not(:disabled):hover, &:not(:disabled):active': {
        backgroundColor: theme.palette.secondary.A300
      }
    })
  }),

  ...(ownerState.disabled && {
    pointerEvents: 'none',
    opacity: 0.4
  }),

  ...(ownerState.size === '24' && {
    height: '24px',
    paddingLeft: '2px'
  }),
  ...(ownerState.size === '32' && {
    height: '32px',
    padding: '0 4px'
  }),
  ...(ownerState.size === '40' && {
    height: '40px',
    padding: '0 8px 0 4px'
  })
}));

export const ChipLabel = styled('span', {
  name: 'ESChip',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label
})<{ ownerState: ChipOwnerState }>(({ theme }) => ({
  ...theme.typography.body100,
  color: theme.palette.monoA.A900,
  display: 'block',
  padding: '0 6px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
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
    size = '24',
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
    name: 'ESChip'
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;
  const component = clickable ? ButtonBase : InComponent || 'div';

  const chipRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(chipRef, ref);

  const ownerState = { classes: inClasses, size, variant, selected, selectedColor, disabled, clickable };
  const classes = useUtilityClasses(ownerState);

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
          component: InComponent || 'div'
          // focusVisibleClassName: classes.focusVisible,
          // ...(!clickable && { disableRipple: true })
        }
      : {};

  let deleteIcon = null;
  if (onDelete) {
    deleteIcon =
      inIconDelete && isValidElement(inIconDelete) ? (
        cloneElement(inIconDelete, {
          className: clsx(inIconDelete.props.className, classes.deleteIcon),
          onClick: handleDeleteIconClick,
          onMouseDown: onStopRipple,
          onTouchStart: onStopRipple
        })
      ) : (
        <IconButton
          className={clsx(classes.deleteIcon)}
          component="div"
          size="24"
          tabIndex={-1}
          onClick={handleDeleteIconClick}
          onMouseDown={onStopRipple}
          onTouchStart={onStopRipple}
        >
          <IconChipsClose />
        </IconButton>
      );
  }

  let startIcon: ReactNode | null = null;
  if (inStartIcon && isValidElement(inStartIcon)) {
    startIcon = cloneElement(inStartIcon, {
      className: clsx(inStartIcon.props.className, classes.startIcon)
    });
  }

  let endIcon: ReactNode | null = null;
  if (inEndIcon && isValidElement(inEndIcon)) {
    endIcon = cloneElement(inEndIcon, {
      className: clsx(inEndIcon.props.className, classes.endIcon)
    });
  }

  return (
    <ChipRoot
      ref={handleRef}
      as={component}
      className={clsx(classes.root, className)}
      disabled={clickable && disabled ? true : undefined}
      ownerState={ownerState}
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
