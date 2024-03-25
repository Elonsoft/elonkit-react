import { FocusEvent, forwardRef, MouseEvent } from 'react';

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
  fullWidth?: TabProps['fullWidth'];
  icon?: boolean;
  label?: TabProps['label'];
  selected?: TabProps['selected'];
  disabled?: TabProps['disabled'];
  disableFocusRipple?: TabProps['disableFocusRipple'];
  rounded?: TabProps['rounded'];
  startIcon?: TabProps['startIcon'];
  endIcon?: TabProps['endIcon'];
};

const useUtilityClasses = (ownerState: TabOwnerState) => {
  const { classes, fullWidth, icon, label, selected, disabled, startIcon, endIcon } = ownerState;

  const slots = {
    root: [
      'root',
      icon && label && 'labelIcon',
      fullWidth && 'fullWidth',
      selected && 'selected',
      !!startIcon && 'startIcon',
      disabled && 'disabled',
      !!endIcon && 'endIcon',
      'labelWrapper'
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
      !!ownerState.startIcon && styles.startIcon,
      !!ownerState.endIcon && styles.endIcon
    ];
  }
})<{ ownerState: TabOwnerState }>(({ theme, ownerState }) => ({
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  flexShrink: 0,
  padding: '12px 8px',
  overflow: 'hidden',
  gap: 8,
  zIndex: 0,
  fontFamily: 'inherit',

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
  ...(ownerState.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  }),
  '&.Mui-disabled': {
    color: theme.palette.monoA.A400
  }
}));

const TabLabelWrapper = styled('span', {
  name: 'ESTab',
  slot: 'LabelWrapper',
  overridesResolver: (props, styles) => [styles.labelWrapper]
})(({ theme }) => ({
  ...theme.typography.body100,
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}));

const TabIcon = styled('span', {
  name: 'ESTab',
  slot: 'Icon',
  overridesResolver: (props, styles) => [styles.icon]
})(() => ({
  display: 'inline-flex',
  alignSelf: 'center'
}));

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(inProps: TabProps, ref) {
  const {
    className,
    disabled = false,
    disableFocusRipple = true,
    fullWidth,
    startIcon,
    endIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTab' });

  const ownerState = {
    ...props,
    disabled,
    disableFocusRipple,
    selected,
    startIcon,
    endIcon,
    icon: !!startIcon || !!endIcon,
    label: !!label,
    fullWidth
  };

  const classes = useUtilityClasses(ownerState);

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
      {...props}
    >
      {!!startIcon && <TabIcon className={classes.iconWrapper}>{startIcon}</TabIcon>}
      <TabLabelWrapper>{label}</TabLabelWrapper>
      {!!endIcon && <TabIcon className={classes.iconWrapper}>{endIcon}</TabIcon>}
      {indicator}
    </TabRoot>
  );
});
