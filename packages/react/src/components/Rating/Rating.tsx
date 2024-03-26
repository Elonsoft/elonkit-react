/* eslint-disable react/display-name */
import React, { useRef, useState } from 'react';

import { RatingProps } from './Rating.types';

import clsx from 'clsx';
import { getRatingUtilityClass, ratingClasses } from './Rating.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useControlled, useIsFocusVisible } from '@mui/material';
import useId from '@mui/material/utils/useId';

import { RatingItem, RatingLabel } from './RatingItem/RatingItem';
import { clamp, roundValueToPrecision } from './utils';

import { useForkRef } from '../../hooks/useForkRef';
import { IconStarFillW200, IconStarFillW300, IconStarFillW500, IconStarLcFillW600 } from '../../icons';

type RatingOwnerState = {
  classes?: RatingProps['classes'];
  disabled?: boolean;
  readOnly?: boolean;
  visuallyHidden?: boolean;
  label?: string;
  labelEmptyValue?: string;
  focusVisible?: boolean;
  emptyValueFocused?: boolean;
  iconActive?: boolean;
  decimal?: string;
};

const useUtilityClasses = (ownerState: RatingOwnerState) => {
  const { classes, disabled, readOnly, emptyValueFocused, focusVisible } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', readOnly && 'readOnly', focusVisible && 'focusVisible'],
    visuallyHidden: ['visuallyHidden'],
    label: ['label'],
    labelEmptyValue: [emptyValueFocused && 'labelEmptyValueActive'],
    iconActive: ['iconActive'],
    decimal: ['decimal']
  };

  return composeClasses(slots, getRatingUtilityClass, classes);
};

const RatingRoot = styled('span', {
  name: 'ESRating',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, size, readOnly }
    } = props;

    return [
      { [`& .${ratingClasses.visuallyHidden}`]: styles.visuallyHidden },
      styles.root,
      readOnly && styles.readOnly,
      disabled && styles.disabled,
      styles[size]
    ];
  }
})<{ ownerState: RatingOwnerState }>(({ ownerState: { readOnly }, theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  color: theme.palette.monoA.A300,
  cursor: 'pointer',
  textAlign: 'left',
  width: 'min-content',
  WebkitTapHighlightColor: 'transparent',

  [`& .${ratingClasses.visuallyHidden}`]: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  },
  [`&.${ratingClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none'
  },
  [`&.${ratingClasses.focusVisible} .${ratingClasses.iconActive}`]: {
    outline: '1px solid #999'
  },
  ...(readOnly && {
    pointerEvents: 'none'
  })
}));
const RatingDecimal = styled('span', {
  name: 'ESRating',
  slot: 'Decimal',
  overridesResolver: (props, styles) => {
    const { iconActive } = props;

    return [styles.decimal, iconActive && styles.iconActive];
  }
})<{ ownerState: RatingOwnerState }>(({ ownerState: { iconActive } }) => ({
  position: 'relative',
  top: '0',
  left: '0',
  height: 'fit-content',
  ...(iconActive && {
    transform: 'scale(1.2)'
  })
}));

function IconContainer(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, ...other } = props;
  return <span {...other} />;
}

function defaultLabelText(value: number) {
  return `${value} Star${value === 1 ? '' : 's'}`;
}

const defaultIcon = (size: number) => {
  switch (size) {
    case 50:
      return <IconStarFillW200 container containerSize="12px" sx={{ color: 'yellow.300' }} />;
      break;
    case 100:
      return <IconStarFillW300 container containerSize="16px" sx={{ color: 'yellow.300' }} />;
      break;
    case 150:
      return <IconStarFillW500 container containerSize="20px" sx={{ color: 'yellow.300' }} />;
      break;
    case 200:
      return <IconStarLcFillW600 container containerSize="24px" size="52px" sx={{ color: 'yellow.300' }} />;
      break;
    case 250:
      return <IconStarLcFillW600 container containerSize="28px" size="56px" sx={{ color: 'yellow.300' }} />;
      break;
    case 300:
      return <IconStarLcFillW600 container containerSize="32px" size="60px" sx={{ color: 'yellow.300' }} />;
      break;
    case 350:
      return <IconStarLcFillW600 container containerSize="36px" size="68px" sx={{ color: 'yellow.300' }} />;
      break;
    case 400:
      return <IconStarLcFillW600 container containerSize="40px" size="78px" sx={{ color: 'yellow.300' }} />;
      break;
    default:
      <IconStarLcFillW600 container containerSize="32px" size="60px" sx={{ color: 'yellow.300' }} />;
  }
};
const defaultEmptyIcon = (size: number) => {
  switch (size) {
    case 50:
      return <IconStarFillW200 container containerSize="12px" />;
      break;
    case 100:
      return <IconStarFillW300 container containerSize="16px" />;
      break;
    case 150:
      return <IconStarFillW500 container containerSize="20px" />;
      break;
    case 200:
      return <IconStarLcFillW600 container containerSize="24px" size="52px" />;
      break;
    case 250:
      return <IconStarLcFillW600 container containerSize="28px" size="56px" />;
      break;
    case 300:
      return <IconStarLcFillW600 container containerSize="32px" size="60px" />;
      break;
    case 350:
      return <IconStarLcFillW600 container containerSize="36px" size="68px" />;
      break;
    case 400:
      return <IconStarLcFillW600 container containerSize="40px" size="78px" />;
      break;
    default:
      <IconStarLcFillW600 container containerSize="32px" size="60px" />;
  }
};

export const Rating = React.forwardRef((inProps: RatingProps, ref) => {
  const {
    className,
    defaultValue = null,
    emptyLabelText = 'Empty',
    disabled = false,
    onChange,
    onChangeActive,
    size = 300,
    IconContainerComponent = IconContainer,
    highlightSelectedOnly = false,
    getLabelText = defaultLabelText,
    onMouseLeave,
    onMouseMove,
    precision = 1,
    readOnly = false,
    emptyIcon = defaultEmptyIcon(size),
    icon = defaultIcon(size),
    max = 5,
    sx,
    name: nameProp,
    value: valueProp,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESRating'
  });
  const name = useId(nameProp);

  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Rating'
  });
  const [{ hover, focus }, setState] = useState({
    hover: -1,
    focus: -1
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  let value = valueRounded === null ? 0 : valueRounded;
  if (hover !== -1) {
    value = hover;
  }
  if (focus !== -1) {
    value = focus;
  }
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = useState(false);

  const rootRef = useRef<HTMLSpanElement | null>(null);
  const handleRef = useForkRef<HTMLSpanElement | unknown>(focusVisibleRef, rootRef, ref);

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });

    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    if (onMouseMove) {
      onMouseMove(event);
    }
    const rootNode = rootRef.current;
    if (rootNode) {
      const { left, width: containerWidth } = rootNode.getBoundingClientRect();
      const percent = (event.clientX - left) / containerWidth;
      let newHover = roundValueToPrecision(max * percent + precision / 2, precision) || 0;
      newHover = clamp(newHover, precision, max);

      setState((prev) =>
        prev.hover === newHover && prev.focus === newHover
          ? prev
          : {
              hover: newHover,
              focus: newHover
            }
      );

      setFocusVisible(false);

      if (onChangeActive && hover !== newHover) {
        onChangeActive(event, newHover);
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value === '' ? null : parseFloat(event.target.value);
    if (hover !== -1) {
      newValue = hover;
    }

    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  };
  const handleClear = (event: any) => {
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }

    setState({
      hover: -1,
      focus: -1
    });

    setValueState(null);

    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    const newFocus = parseFloat(event.target.value);
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (hover !== -1) {
      return;
    }

    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    const newFocus = -1;
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };

  const [emptyValueFocused, setEmptyValueFocused] = useState(false);

  const ownerState = {
    ...props,
    defaultValue,
    disabled,
    emptyIcon,
    emptyLabelText,
    emptyValueFocused,
    focusVisible,
    getLabelText,
    icon,
    IconContainerComponent,
    max,
    precision,
    readOnly,
    size
  };
  const classes = useUtilityClasses(ownerState);

  return (
    <RatingRoot
      ref={handleRef}
      aria-label={readOnly ? getLabelText(value) : undefined}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      role={readOnly ? 'img' : undefined}
      sx={sx}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {Array.from(new Array(max)).map((_, index) => {
        const itemValue = index + 1;
        const ratingItemProps = {
          classes,
          disabled,
          emptyIcon,
          focus,
          getLabelText,
          highlightSelectedOnly,
          hover,
          icon,
          IconContainerComponent,
          name,
          onBlur: handleBlur,
          onChange: handleChange,
          onClick: handleClear,
          onFocus: handleFocus,
          ratingValue: value,
          ratingValueRounded: valueRounded,
          readOnly,
          ownerState
        };

        const isActive = itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1);
        if (precision < 1) {
          const items = Array.from(new Array(1 / precision));
          return (
            <RatingDecimal
              key={itemValue}
              className={clsx(classes.decimal, { [classes.iconActive]: isActive })}
              ownerState={{ iconActive: isActive }}
            >
              {items.map(($, indexDecimal) => {
                const itemDecimalValue = roundValueToPrecision(
                  itemValue - 1 + (indexDecimal + 1) * precision,
                  precision
                );
                return (
                  <RatingItem
                    key={itemDecimalValue}
                    {...ratingItemProps}
                    // The icon is already displayed as active
                    isActive={false}
                    itemValue={itemDecimalValue === null ? 0 : itemDecimalValue}
                    labelProps={{
                      style:
                        items.length - 1 === indexDecimal
                          ? {}
                          : {
                              width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : '0%',
                              overflow: 'hidden',
                              position: 'absolute',
                              top: '0',
                              left: '0'
                            }
                    }}
                  />
                );
              })}
            </RatingDecimal>
          );
        }
        return <RatingItem key={itemValue} {...ratingItemProps} isActive={isActive} itemValue={itemValue} />;
      })}
      {!readOnly && !disabled && (
        <RatingLabel className={clsx(classes.label, classes.labelEmptyValue)} ownerState={ownerState}>
          <input
            checked={valueRounded === null}
            className={classes.visuallyHidden}
            id={`${name}-empty`}
            name={name}
            type="radio"
            value=""
            onBlur={() => setEmptyValueFocused(false)}
            onChange={handleChange}
            onFocus={() => setEmptyValueFocused(true)}
          />
          <span className={classes.visuallyHidden}>{emptyLabelText}</span>
        </RatingLabel>
      )}
    </RatingRoot>
  );
});
