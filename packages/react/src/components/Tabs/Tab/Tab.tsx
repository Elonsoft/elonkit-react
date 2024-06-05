import { FocusEvent, forwardRef, MouseEvent } from 'react';

import { TabProps } from './Tab.types';

import clsx from 'clsx';
import { getTabUtilityClass, tabClasses } from './Tab.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { ButtonBase, buttonBaseClasses } from '../../ButtonBase';

type TabOwnerState = {
  classes?: TabProps['classes'];
  fullWidth?: TabProps['fullWidth'];
  icon?: boolean;
  label?: boolean;
  selected?: TabProps['selected'];
  disabled?: TabProps['disabled'];
  disableFocusRipple?: TabProps['disableFocusRipple'];
  rounded?: TabProps['rounded'];
};

const useUtilityClasses = (ownerState: TabOwnerState) => {
  const { classes, fullWidth, icon, label, rounded, selected, disabled } = ownerState;

  const slots = {
    root: [
      'root',
      icon && label && 'labelIcon',
      fullWidth && 'fullWidth',
      rounded && 'rounded',
      selected && 'selected',
      disabled && 'disabled',
      'labelWrapper'
    ],
    startIcon: ['startIcon'],
    endIcon: ['endIcon']
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
      ownerState.rounded && styles.rounded
    ];
  }
})<{ ownerState: TabOwnerState }>(({ theme }) => ({
  maxWidth: 360,
  minWidth: 90,
  minHeight: 48,
  position: 'relative',
  flexShrink: 0,
  padding: '8px 8px',
  overflow: 'hidden',
  fontFamily: 'inherit',

  '--text': theme.palette.monoA.A700,
  '--hovered': theme.palette.monoA.A50,
  '--pressed': theme.palette.monoA.A150,
  '--focused': theme.palette.monoA.A200,

  [`& .${buttonBaseClasses.wrapper}`]: {
    gap: 8
  },

  [`&.${tabClasses.selected}`]: {
    '--text': theme.palette.monoA.A900,

    [`& .${buttonBaseClasses.wrapper} .${tabClasses.startIcon}, & .${buttonBaseClasses.wrapper} .${tabClasses.endIcon}`]:
      {
        color: theme.palette.monoA.A800
      }
  },

  [`&.${tabClasses.rounded}`]: {
    minHeight: 'inherit',
    maxHeight: 36,
    borderRadius: 4,
    marginTop: 6,
    marginBottom: 6
  },

  [`&.${tabClasses.fullWidth}`]: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  },

  [`&.${buttonBaseClasses.disabled}`]: {
    '--text': theme.palette.monoA.A400
  },

  [`& .${buttonBaseClasses.wrapper} .${tabClasses.startIcon}, & .${buttonBaseClasses.wrapper} .${tabClasses.endIcon}`]:
    {
      color: theme.palette.monoA.A600
    }
}));

const TabLabelWrapper = styled('span', {
  name: 'ESTab',
  slot: 'LabelWrapper',
  overridesResolver: (props, styles) => [styles.labelWrapper]
})(({ theme }) => ({
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  ...theme.typography.body100
}));

const TabStartIcon = styled('span', {
  name: 'ESTab',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => [styles.startIcon]
})(() => ({
  display: 'inherit'
}));

const TabEndIcon = styled('span', {
  name: 'ESTab',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => [styles.endIcon]
})(() => ({
  display: 'inherit'
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
    rounded,
    selected,
    selectionFollowsFocus,
    value,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTab' });

  const ownerState = {
    ...props,
    disabled,
    disableFocusRipple,
    rounded,
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
      ownerState={ownerState}
      role="tab"
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
      onFocus={handleFocus}
      {...props}
    >
      {!!startIcon && <TabStartIcon className={classes.startIcon}>{startIcon}</TabStartIcon>}
      <TabLabelWrapper>{label}</TabLabelWrapper>
      {!!endIcon && <TabEndIcon className={classes.endIcon}>{endIcon}</TabEndIcon>}
      {indicator}
    </TabRoot>
  );
});
