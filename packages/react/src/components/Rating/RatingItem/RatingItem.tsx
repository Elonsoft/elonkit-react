import React from 'react';

import { RatingItemProps } from './RatingItem.types';

import clsx from 'clsx';
import { getRatingItemUtilityClass, ratingItemClasses } from './RatingItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_useId as useId } from '@mui/utils';

type RatingItemOwnerState = {
  classes?: RatingItemProps['classes'];
  disabled?: boolean;
  iconEmpty?: boolean;
  iconFilled?: boolean;
  iconHover?: boolean;
  iconFocus?: boolean;
  iconActive?: boolean;
  visuallyHidden?: boolean;
  emptyValueFocused?: boolean;
  value?: number;
};

const useUtilityClasses = (ownerState: RatingItemOwnerState) => {
  const { classes, disabled, emptyValueFocused } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled'],
    icon: ['icon'],
    iconEmpty: ['iconEmpty'],
    iconFilled: ['iconFilled'],
    iconHover: ['iconHover'],
    iconFocus: ['iconFocus'],
    iconActive: ['iconActive'],
    visuallyHidden: ['visuallyHidden'],
    labelEmptyValue: [emptyValueFocused && 'labelEmptyValueActive']
  };

  return composeClasses(slots, getRatingItemUtilityClass, classes);
};
const RatingItemRoot = styled('div', {
  name: 'ESItemRating',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, size }
    } = props;
    return [styles.root, disabled && styles.disabled, styles[size]];
  }
})<{ ownerState: RatingItemOwnerState }>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  color: theme.palette.monoA.A300,

  [`& .${ratingItemClasses.visuallyHidden}`]: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  }
}));
export const RatingLabel = styled('label', {
  name: 'ESRatingLabel',
  slot: 'Label',
  overridesResolver: ({ ownerState }, styles) => [
    styles.label,
    ownerState.emptyValueFocused && styles.labelEmptyValueActive
  ]
})<{ ownerState: RatingItemOwnerState }>(({ ownerState: { emptyValueFocused } }) => ({
  cursor: 'inherit',
  ...(emptyValueFocused && {
    top: 0,
    bottom: 0,
    position: 'absolute',
    outline: '1px solid #999',
    width: '100%'
  })
}));
const RatingIcon = styled('span', {
  name: 'ESRatingIcon',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.icon,
      ownerState.iconEmpty && styles.iconEmpty,
      ownerState.iconFilled && styles.iconFilled,
      ownerState.iconHover && styles.iconHover,
      ownerState.iconFocus && styles.iconFocus,
      ownerState.iconActive && styles.iconActive
    ];
  }
})<{ ownerState: RatingItemOwnerState }>(({ theme, ownerState }) => ({
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  pointerEvents: 'none',
  ...(ownerState.iconActive && {
    transform: 'scale(1.2)'
  }),
  ...(ownerState.iconEmpty && {
    color: theme.palette.monoA.A300
  }),
  color: theme.palette.monoA.A300
}));
export const RatingItem = (inProps: RatingItemProps) => {
  const {
    classes: inClasses,
    disabled,
    emptyIcon,
    focus,
    getLabelText,
    highlightSelectedOnly,
    hover,
    icon,
    IconContainerComponent,
    isActive,
    itemValue,
    labelProps,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    readOnly,
    ratingValue,
    ratingValueRounded,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESRatingItem'
  });

  const isFilled = highlightSelectedOnly ? itemValue === ratingValue : itemValue <= ratingValue;
  const isHovered = itemValue <= hover;
  const isFocused = itemValue <= focus;
  const isChecked = itemValue === ratingValueRounded;
  const ownerState = { ...props, classes: inClasses, disabled };
  const classes = useUtilityClasses(ownerState);

  const id = useId();
  const container = (
    <RatingIcon
      as={IconContainerComponent}
      className={clsx(classes.icon, {
        [classes.iconEmpty]: !isFilled,
        [classes.iconFilled]: isFilled,
        [classes.iconHover]: isHovered,
        [classes.iconFocus]: isFocused,
        [classes.iconActive]: isActive
      })}
      ownerState={{
        ...ownerState,
        iconEmpty: !isFilled,
        iconFilled: isFilled,
        iconHover: isHovered,
        iconFocus: isFocused,
        iconActive: isActive,
        value: itemValue
      }}
    >
      {emptyIcon && !isFilled ? emptyIcon : icon}
    </RatingIcon>
  );
  if (readOnly) {
    return <span {...labelProps}>{container}</span>;
  }

  return (
    <RatingItemRoot ownerState={{ ...ownerState }}>
      <RatingLabel htmlFor={id} ownerState={{ ...ownerState, emptyValueFocused: undefined }} {...labelProps}>
        {container}
        <span className={classes.visuallyHidden}>{getLabelText(itemValue)}</span>
      </RatingLabel>
      <input
        checked={isChecked}
        className={classes.visuallyHidden}
        disabled={disabled}
        id={id}
        name={name}
        type="radio"
        value={itemValue}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
      />
    </RatingItemRoot>
  );
};
