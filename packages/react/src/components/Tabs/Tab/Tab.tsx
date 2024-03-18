import { cloneElement, FocusEvent, forwardRef, isValidElement, MouseEvent, ReactElement } from 'react';

import { TabProps } from './Tab.types';

import clsx from 'clsx';
import { getTabUtilityClass, tabClasses } from './Tab.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { capitalize } from '@mui/material/utils';

type TabOwnerState = {
  classes?: TabProps['classes'];
  textColor?: 'inherit' | 'primary' | 'secondary';
  fullWidth?: boolean;
  wrapped?: boolean;
  icon?: boolean;
  label?: boolean;
  selected?: boolean;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  variant?: 'default' | 'rounded';
};

const useUtilityClasses = (ownerState: TabOwnerState) => {
  const { classes, textColor, fullWidth, wrapped, icon, label, selected, disabled } = ownerState;

  const slots = {
    root: [
      'root',
      icon && label && 'labelIcon',
      textColor && `textColor${capitalize(textColor)}`,
      fullWidth && 'fullWidth',
      wrapped && 'wrapped',
      selected && 'selected',
      disabled && 'disabled'
    ],
    iconWrapper: ['iconWrapper']
  };

  return composeClasses(slots, getTabUtilityClass, classes);
};

const TabRoot = styled(ButtonBase, {
  name: 'ESTab',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.label && ownerState.icon && styles.labelIcon,
      styles[`textColor${capitalize(ownerState.textColor)}`],
      ownerState.fullWidth && styles.fullWidth,
      ownerState.wrapped && styles.wrapped
    ];
  }
})<{ ownerState: TabOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.button,
  ...theme.typography.body100,
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  flexShrink: 0,
  padding: '12px 16px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  color: theme.palette.monoA.A700,

  ...(ownerState.selected && {
    color: theme.palette.monoA.A900
  }),
  ...(ownerState.variant === 'default' && {
    minHeight: 48
  }),
  ...(ownerState.variant === 'rounded' && {
    borderRadius: '4px',
    maxHeight: 36,
    marginTop: 6,
    marginBottom: 6
  }),
  ...(ownerState.label && {
    flexDirection: ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom' ? 'column' : 'row'
  }),
  lineHeight: 1.25,
  ...(ownerState.icon &&
    ownerState.label && {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9,
      [`& > .${tabClasses.iconWrapper}`]: {
        ...(ownerState.iconPosition === 'top' && {
          marginBottom: 6
        }),
        ...(ownerState.iconPosition === 'bottom' && {
          marginTop: 6
        }),
        ...(ownerState.iconPosition === 'start' && {
          marginRight: theme.spacing(1)
        }),
        ...(ownerState.iconPosition === 'end' && {
          marginLeft: theme.spacing(1)
        })
      }
    }),
  ...(ownerState.textColor === 'inherit' && {
    color: 'inherit',
    opacity: 0.6,
    [`&.${tabClasses.selected}`]: {
      opacity: 1
    },
    [`&.${tabClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity
    }
  }),
  ...(ownerState.textColor === 'primary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.primary.main
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled
    }
  }),
  ...(ownerState.textColor === 'secondary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.secondary.main
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled
    }
  }),
  ...(ownerState.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  }),
  ...(ownerState.wrapped && {
    fontSize: theme.typography.pxToRem(12)
  }),
  [`&.${tabClasses.root}`]: {
    '&:hover': {
      backgroundColor: theme.palette.monoA.A50
    },
    '&:active': {
      backgroundColor: theme.palette.monoA.A150
    },
    '&:focus': {
      backgroundColor: theme.palette.monoA.A200
    },
    '&.Mui-disabled': {
      color: theme.palette.monoA.A400
    }
  }
}));

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(inProps: TabProps, ref) {
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    fullWidth,
    icon: iconProp,
    iconPosition = 'top',
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    textColor = 'inherit',
    value,
    variant = 'default',
    wrapped = false,
    ...other
  } = useThemeProps({ props: inProps, name: 'ESTab' });

  const ownerState = {
    ...other,
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    variant,
    wrapped
  };

  const classes = useUtilityClasses(ownerState);
  const icon =
    iconProp && label && isValidElement(iconProp)
      ? cloneElement(iconProp as ReactElement, {
          className: clsx(classes.iconWrapper, (iconProp as ReactElement).props.className)
        })
      : iconProp;
  const handleClick = (event: MouseEvent) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <TabRoot
      ref={ref}
      aria-selected={selected}
      className={clsx(classes.root, className)}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      ownerState={ownerState}
      role="tab"
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
      onFocus={handleFocus}
      {...other}
    >
      {iconPosition === 'top' || iconPosition === 'start' ? (
        <>
          {icon}
          {label}
        </>
      ) : (
        <>
          {label}
          {icon}
        </>
      )}

      {indicator}
    </TabRoot>
  );
});
