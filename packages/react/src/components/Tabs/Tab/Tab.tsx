import { cloneElement, FocusEvent, forwardRef, isValidElement, MouseEvent, ReactElement } from 'react';

import { TabProps } from './Tab.types';

import clsx from 'clsx';
import { getTabUtilityClass, tabClasses } from './Tab.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, styled, useThemeProps } from '@mui/material/styles';
import ButtonBase, { touchRippleClasses } from '@mui/material/ButtonBase';

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

type TabOwnerState = {
  classes?: TabProps['classes'];
  fullWidth?: boolean;
  wrapped?: boolean;
  icon?: boolean;
  label?: boolean;
  selected?: boolean;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  rounded?: boolean;
};

const useUtilityClasses = (ownerState: TabOwnerState) => {
  const { classes, fullWidth, wrapped, icon, label, selected, disabled } = ownerState;

  const slots = {
    root: [
      'root',
      icon && label && 'labelIcon',
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
      ownerState.fullWidth && styles.fullWidth,
      ownerState.wrapped && styles.wrapped
    ];
  }
})<{ ownerState: TabOwnerState }>(({ theme, ownerState }) => ({
  color: theme.palette.monoA.A700,
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  flexShrink: 0,
  padding: '12px 16px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  gap: 8,
  ...theme.typography.body100,

  ...theme.mixins.button({
    background: 'initial',
    color: ownerState.selected ? theme.palette.monoA.A900 : theme.palette.monoA.A700,
    hover: theme.palette.monoA.A50,
    active: theme.palette.monoA.A150,
    focus: theme.palette.monoA.A200
  }),

  [`& .${touchRippleClasses.rippleVisible}`]: {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },
  [`&.${tabClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      transitionDuration: `${theme.transitions.duration.standard}ms`
    }
  },

  ...(!ownerState.rounded && {
    minHeight: 48
  }),
  ...(ownerState.rounded && {
    borderRadius: '4px',
    maxHeight: 36,
    marginTop: 6,
    marginBottom: 6
  }),
  lineHeight: 1.25,
  ...(ownerState.icon &&
    ownerState.label && {
      paddingTop: 9,
      paddingBottom: 9
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
  '&.Mui-disabled': {
    color: theme.palette.monoA.A400
  }
}));

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(inProps: TabProps, ref) {
  const {
    className,
    disabled = false,
    disableFocusRipple = true,
    fullWidth,
    startIcon: startIconProp,
    endIcon: endIconProp,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    wrapped = false,
    ...other
  } = useThemeProps({ props: inProps, name: 'ESTab' });

  const ownerState = {
    ...other,
    disabled,
    disableFocusRipple,
    selected,
    icon: !!startIconProp || !!endIconProp,
    label: !!label,
    fullWidth,
    wrapped
  };

  const classes = useUtilityClasses(ownerState);
  const startIcon =
    startIconProp && isValidElement(startIconProp)
      ? cloneElement(startIconProp as ReactElement, {
          className: clsx(classes.iconWrapper, (startIconProp as ReactElement).props.className)
        })
      : startIconProp;

  const endIcon =
    endIconProp && isValidElement(endIconProp)
      ? cloneElement(endIconProp as ReactElement, {
          className: clsx(classes.iconWrapper, (endIconProp as ReactElement).props.className)
        })
      : endIconProp;
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
      {startIcon}
      {label}
      {endIcon}
      {indicator}
    </TabRoot>
  );
});
