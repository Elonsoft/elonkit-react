import {
  cloneElement,
  FocusEvent,
  forwardRef,
  isValidElement,
  MouseEvent,
  MutableRefObject,
  SyntheticEvent,
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TooltipProps } from './Tooltip.types';

import clsx from 'clsx';
import { getTooltipUtilityClass, tooltipClasses } from './Tooltip.classes';

import { appendOwnerState, unstable_composeClasses as composeClasses } from '@mui/base';

import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import useThemeProps from '@mui/material/styles/useThemeProps';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import capitalize from '@mui/utils/capitalize';
import useControlled from '@mui/utils/useControlled';
import useEventCallback from '@mui/utils/useEventCallback';
import useId from '@mui/utils/useId';
import useIsFocusVisible from '@mui/utils/useIsFocusVisible';

import { useForkRef } from '../../hooks';
import { IconPolygon, IconPolygon2, IconPolygon3 } from '../../icons';
import { svgIconClasses } from '../SvgIcon';

type TooltipOwnerState = {
  classes: TooltipProps['classes'];
  color: TooltipProps['color'];
  isRtl: boolean;
  arrow: TooltipProps['arrow'];
  arrowSize?: TooltipProps['arrowSize'];
  disableInteractive: TooltipProps['disableInteractive'];
  placement: TooltipProps['placement'];
  PopperComponentProp: TooltipProps['PopperComponent'];
  touch: boolean;
};

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

const useUtilityClasses = (ownerState: TooltipOwnerState) => {
  const { classes, disableInteractive, arrow, touch, placement, color, arrowSize } = ownerState;

  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: [
      'tooltip',
      arrow && 'tooltipArrow',
      touch && 'touch',
      placement && `tooltipPlacement${capitalize(placement.split('-')[0])}`,
      color && `color${capitalize(color)}`,
    ],
    arrow: ['arrow', arrowSize && `arrowSize${arrowSize}`],
  };

  return composeClasses(slots, getTooltipUtilityClass, classes);
};

const TooltipPopper = styled(Popper, {
  name: 'ESTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.popper,
      !ownerState.disableInteractive && styles.popperInteractive,
      ownerState.arrow && styles.popperArrow,
      !ownerState.open && styles.popperClose,
    ];
  },
})<{ ownerState: TooltipOwnerState }>(({ theme, ownerState, open }) => ({
  zIndex: theme.zIndex.tooltip,
  // disable jss-rtl plugin
  pointerEvents: 'none',
  ...(!ownerState.disableInteractive && {
    pointerEvents: 'auto',
  }),
  ...(!open && {
    pointerEvents: 'none',
  }),

  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    marginBottom: '14px !important',
  },
  [`&[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
    marginTop: '14px !important',
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    marginLeft: '14px !important',
  },
  [`&[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]: {
    marginRight: '14px !important',
  },

  ...(ownerState.arrow && {
    [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
      top: 1.5,
      marginTop: '-0.71em',

      [`&.${tooltipClasses.arrowSize8}`]: {
        top: 0.5,
      },
      [`&.${tooltipClasses.arrowSize10}`]: {
        width: 'auto',
        height: 'auto',
        top: -1.5,
      },
    },
    [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
      bottom: 1.5,
      marginBottom: '-0.71em',

      [`&.${tooltipClasses.arrowSize8}`]: {
        bottom: 0.5,
      },
      [`&.${tooltipClasses.arrowSize10}`]: {
        width: 'auto',
        height: 'auto',
        bottom: -1.5,
      },

      [`& .${svgIconClasses.root}`]: {
        transform: 'rotate(180deg)',
      },
    },
    [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
      height: '1em',
      width: '0.71em',

      ...(ownerState.isRtl
        ? {
            right: 1.5,
            marginRight: '-0.71em',

            [`&.${tooltipClasses.arrowSize8}`]: {
              right: 0.5,
            },
            [`&.${tooltipClasses.arrowSize10}`]: {
              width: 10,
              height: 16,
              right: -1.5,
            },
          }
        : {
            left: 1.5,
            marginLeft: '-0.71em',

            [`&.${tooltipClasses.arrowSize8}`]: {
              left: 0.5,
            },
            [`&.${tooltipClasses.arrowSize10}`]: {
              width: 10,
              height: 16,
              left: -1.5,
            },
          }),

      [`& .${svgIconClasses.root}`]: {
        transform: 'rotate(270deg)',
      },
    },
    [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
      height: '1em',
      width: '0.71em',

      ...(ownerState.isRtl
        ? {
            left: 1.5,
            marginLeft: '-0.71em',

            [`&.${tooltipClasses.arrowSize8}`]: {
              left: 0.5,
            },
            [`&.${tooltipClasses.arrowSize10}`]: {
              width: 10,
              height: 16,
              left: -1.5,
            },
          }
        : {
            right: 1.5,
            marginRight: '-0.71em',

            [`&.${tooltipClasses.arrowSize8}`]: {
              right: 0.5,
            },
            [`&.${tooltipClasses.arrowSize10}`]: {
              width: 10,
              height: 16,
              right: -1.5,
            },
          }),

      [`& .${svgIconClasses.root}`]: {
        transform: 'rotate(90deg)',
      },
    },
  }),
}));

const TooltipTooltip = styled('div', {
  name: 'ESTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.tooltip,
      ownerState.touch && styles.touch,
      ownerState.arrow && styles.tooltipArrow,
      styles[`tooltipPlacement${capitalize(ownerState.placement.split('-')[0])}`],
    ];
  },
})<{ ownerState: TooltipOwnerState }>(({ theme, ownerState }) => {
  return {
    color: theme.vars.palette.monoB[500],
    backdropFilter: 'blur(40px)',
    padding: '4px 8px',
    borderRadius: theme.shape.borderRadius,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: 'break-word',
    ...theme.typography.caption,

    [`&.${tooltipClasses.colorPrimary}`]: {
      backgroundColor: theme.vars.palette.primary[300],
    },
    [`&.${tooltipClasses.colorSecondary}`]: {
      backgroundColor: theme.vars.palette.secondary[300],
      color: theme.vars.palette.monoA.A900,
    },
    [`&.${tooltipClasses.colorError}`]: {
      backgroundColor: theme.vars.palette.error[300],
    },
    [`&.${tooltipClasses.colorInfo}`]: {
      backgroundColor: theme.vars.palette.info[300],
    },
    [`&.${tooltipClasses.colorSuccess}`]: {
      backgroundColor: theme.vars.palette.success[300],
    },
    [`&.${tooltipClasses.colorWarning}`]: {
      backgroundColor: theme.vars.palette.warning[300],
    },
    [`&.${tooltipClasses.colorPrimary}`]: {
      backgroundColor: theme.vars.palette.primary[300],
    },
    [`&.${tooltipClasses.colorMonoAA600}`]: {
      backgroundColor: theme.vars.palette.monoA.A600,
    },
    [`&.${tooltipClasses.colorMonoB}`]: {
      backgroundColor: theme.vars.palette.monoB[500],
      color: theme.vars.palette.monoA.A900,
      boxShadow: `${theme.vars.palette.shadow.down[500]}`,
    },
    [`&.${tooltipClasses.colorMonoBA600}`]: {
      backgroundColor: theme.vars.palette.monoB.A600,
      color: theme.vars.palette.monoA.A900,
    },
    [`&.${tooltipClasses.colorWhiteA600}`]: {
      backgroundColor: theme.vars.palette.white.A600,
      color: theme.vars.palette.monoA.A900,
    },

    ...(ownerState.arrow && {
      position: 'relative',
      margin: 0,
    }),
    ...(ownerState.touch && {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: `${round(16 / 14)}em`,
      fontWeight: theme.typography.fontWeightRegular,
    }),
    [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: 'right center',
      ...(ownerState.isRtl
        ? {
            marginLeft: '14px',
            ...(ownerState.touch && {
              marginLeft: '24px',
            }),
          }
        : {
            marginRight: '14px',
            ...(ownerState.touch && {
              marginRight: '24px',
            }),
          }),
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: 'left center',
      ...(ownerState.isRtl
        ? {
            marginRight: '14px',
            ...(ownerState.touch && {
              marginRight: '24px',
            }),
          }
        : {
            marginLeft: '14px',
            ...(ownerState.touch && {
              marginLeft: '24px',
            }),
          }),
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: 'center bottom',
      marginBottom: '14px',
      ...(ownerState.touch && {
        marginBottom: '24px',
      }),
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: 'center top',
      marginTop: '14px',
      ...(ownerState.touch && {
        marginTop: '24px',
      }),
    },
  };
});

const TooltipArrow = styled('span', {
  name: 'ESTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow,
})<{ ownerState: TooltipOwnerState }>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  /* = width / sqrt(2) = (length of the hypotenuse) */
  height: '0.71em',
  boxSizing: 'border-box',

  [`.${tooltipClasses.colorPrimary} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.primary[300],
  },
  [`.${tooltipClasses.colorSecondary} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.secondary[300],
  },
  [`.${tooltipClasses.colorError} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.error[300],
  },
  [`.${tooltipClasses.colorInfo} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.info[300],
  },
  [`.${tooltipClasses.colorSuccess} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.success[300],
  },
  [`.${tooltipClasses.colorWarning} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.warning[300],
  },
  [`.${tooltipClasses.colorPrimary} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.primary[300],
  },
  [`.${tooltipClasses.colorMonoAA600} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.monoA.A600,
  },
  [`.${tooltipClasses.colorMonoB} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.monoB[500],
  },
  [`.${tooltipClasses.colorMonoBA600} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.monoB.A600,
  },
  [`.${tooltipClasses.colorWhiteA600} &.${tooltipClasses.arrow}`]: {
    color: theme.vars.palette.white.A600,
  },
}));

let hysteresisOpen = false;
let hysteresisTimer: ReturnType<typeof setTimeout>;
let cursorPosition = { x: 0, y: 0 };

export function testReset() {
  hysteresisOpen = false;

  if (hysteresisTimer) {
    clearTimeout(hysteresisTimer);
  }
}

function composeEventHandler<T extends MouseEvent | FocusEvent | TouchEvent>(
  handler: (event: T, ...params: any[]) => void,
  eventHandler?: (event: T, ...params: any[]) => void
) {
  return (event: SyntheticEvent, ...params: any[]) => {
    if (eventHandler) {
      eventHandler(event as T, ...params);
    }

    handler(event as T, ...params);
  };
}

export const Tooltip = forwardRef(function Tooltip(inProps: TooltipProps, ref) {
  const {
    arrow = true,
    arrowSize = '6',
    children: childrenProp,
    classes: classesProp,
    color = 'monoAA600',
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp = Fade,
    TransitionProps,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTooltip' });

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = isValidElement(childrenProp) ? childrenProp : <span>{childrenProp}</span>;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const [childNode, setChildNode] = useState<HTMLElement>();
  const [arrowRef, setArrowRef] = useState(null);
  const ignoreNonTouchEvents = useRef(false);

  const disableInteractive = disableInteractiveProp || followCursor;

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open',
  });

  let open = openState;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: isControlled } = useRef(openProp !== undefined);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (
        childNode &&
        (childNode as HTMLButtonElement).disabled &&
        !isControlled &&
        title !== '' &&
        childNode.tagName.toLowerCase() === 'button'
      ) {
        console.error(
          [
            'You are providing a disabled `button` child to the Tooltip component.',
            'A disabled element does not fire events.',
            "Tooltip needs to listen to the child element's events to display the title.",
            '',
            'Add a simple wrapper element, such as a `span`.',
          ].join('\n')
        );
      }
    }, [title, childNode, isControlled]);
  }

  const id = useId(idProp);

  const prevUserSelect = useRef<string>();
  const stopTouchInteraction = useCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.userSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    if (touchTimer.current) {
      clearTimeout(touchTimer.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current && enterTimer.current && leaveTimer.current) {
        clearTimeout(closeTimer.current);
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
      }

      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = (event: MouseEvent | FocusEvent | TouchEvent) => {
    clearTimeout(hysteresisTimer);
    hysteresisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = useEventCallback((event: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent) => {
    clearTimeout(hysteresisTimer);

    hysteresisTimer = setTimeout(() => {
      hysteresisOpen = false;
    }, 800 + leaveDelay);

    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  });

  const handleEnter = (event: MouseEvent | FocusEvent | TouchEvent) => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }

    if (enterTimer.current && leaveTimer.current) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    }

    if (enterDelay || (hysteresisOpen && enterNextDelay)) {
      enterTimer.current = setTimeout(
        () => {
          handleOpen(event);
        },
        hysteresisOpen ? enterNextDelay : enterDelay
      );
    } else {
      handleOpen(event);
    }
  };

  const handleLeave = (event: MouseEvent | FocusEvent) => {
    if (enterTimer.current && leaveTimer.current) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    }

    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.
  const [, setChildIsFocusVisible] = useState(false);

  const handleBlur = (event: FocusEvent) => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode && event.currentTarget instanceof HTMLElement) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };

  const detectTouchStart = (event: TouchEvent) => {
    ignoreNonTouchEvents.current = true;

    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;

  const handleTouchStart = (event: TouchEvent) => {
    detectTouchStart(event);

    if (leaveTimer.current && closeTimer.current) {
      clearTimeout(leaveTimer.current);
      clearTimeout(closeTimer.current);
    }

    stopTouchInteraction();

    prevUserSelect.current = document.body.style.userSelect;
    // Prevent iOS text selection on long-tap.
    document.body.style.userSelect = 'none';

    touchTimer.current = setTimeout(() => {
      if (prevUserSelect.current) {
        document.body.style.userSelect = prevUserSelect.current;
        handleEnter(event);
      }
    }, enterTouchDelay);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();

    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }

    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using blink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);

  const handleRef = useForkRef(
    (children as JSX.Element & { ref: MutableRefObject<unknown> }).ref,
    focusVisibleRef,
    setChildNode,
    ref
  );

  // There is no point in displaying an empty tooltip.
  if (!title && title !== 0) {
    open = false;
  }

  const popperRef = useRef<any>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    cursorPosition = { x: event.clientX, y: event.clientY };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps: {
    title?: string | null;
    'aria-describedby'?: string | null;
    'aria-label'?: string | null;
    'aria-labelledby'?: string | null;
  } = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = {
    ...nameOrDescProps,
    ...props,
    ...children.props,
    className: clsx(props.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...(followCursor ? { onMouseMove: handleMouseMove } : {}),
  };

  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-mui-internal-clone-element'] = true;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (childNode && !childNode.getAttribute('data-mui-internal-clone-element')) {
        console.error(
          [
            'The `children` component of the Tooltip is not forwarding its props correctly.',
            'Please make sure that props are spread on the same element that the ref is applied to.',
          ].join('\n')
        );
      }
    }, [childNode]);
  }

  const interactiveWrapperListeners: {
    onMouseOver?: (event: MouseEvent | FocusEvent | TouchEvent) => void;
    onMouseLeave?: (event: MouseEvent | FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
  } = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(
        [
          'You have provided a `title` prop to the child of <Tooltip />.',
          `Remove this title prop \`${children.props.title}\` or the Tooltip component.`,
        ].join('\n')
      );
    }
  }

  const popperOptions = useMemo(() => {
    let tooltipModifiers = [
      {
        name: 'arrow',
        enabled: Boolean(arrowRef),
        options: {
          element: arrowRef,
          padding: 4,
        },
      },
    ];

    if (PopperProps.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }

    return {
      ...PopperProps.popperOptions,
      modifiers: tooltipModifiers,
    };
  }, [arrowRef, PopperProps]);

  const ownerState = {
    ...props,
    classes: classesProp,
    color,
    isRtl,
    arrow,
    arrowSize: slots.arrow || components.Arrow ? undefined : arrowSize,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current,
  };

  const classes = useUtilityClasses(ownerState);

  const PopperComponent = slots.popper ?? components.Popper ?? TooltipPopper;
  const TransitionComponent = slots.transition ?? components.Transition ?? TransitionComponentProp ?? Fade;
  const TooltipComponent = slots.tooltip ?? components.Tooltip ?? TooltipTooltip;
  const ArrowComponent = slots.arrow ?? components.Arrow ?? TooltipArrow;

  const popperProps = appendOwnerState(
    PopperComponent,
    {
      ...PopperProps,
      ...(slotProps.popper ?? componentsProps.popper),
      className: clsx(classes.popper, PopperProps?.className, (slotProps.popper ?? componentsProps.popper)?.className),
    },
    ownerState
  );

  const transitionProps = appendOwnerState(
    TransitionComponent,
    { ...TransitionProps, ...(slotProps.transition ?? componentsProps.transition) },
    ownerState
  );

  const tooltipProps = appendOwnerState(
    TooltipComponent,
    {
      ...(slotProps.tooltip ?? componentsProps.tooltip),
      className: clsx(classes.tooltip, (slotProps.tooltip ?? componentsProps.tooltip)?.className),
    },
    ownerState
  );

  const tooltipArrowProps = appendOwnerState(
    ArrowComponent,
    {
      ...(slotProps.arrow ?? componentsProps.arrow),
      className: clsx(classes.arrow, (slotProps.arrow ?? componentsProps.arrow)?.className),
    },
    ownerState
  );

  return (
    <>
      {cloneElement(children, childrenProps)}
      <PopperComponent
        transition
        anchorEl={
          followCursor
            ? {
                getBoundingClientRect: () => {
                  const { x, y } = cursorPosition;

                  return new DOMRect(x, y, 0, 0);
                },
              }
            : childNode
        }
        as={PopperComponentProp ?? Popper}
        id={id}
        open={childNode ? open : false}
        placement={placement}
        popperRef={popperRef}
        {...interactiveWrapperListeners}
        {...popperProps}
        popperOptions={popperOptions}
      >
        {({ TransitionProps: TransitionPropsInner }) => (
          // eslint-disable-next-line
          // @ts-ignore
          <TransitionComponent
            timeout={theme.transitions.duration.shorter}
            {...TransitionPropsInner}
            {...transitionProps}
          >
            <TooltipComponent {...tooltipProps}>
              {title}
              {arrow ? (
                <ArrowComponent {...tooltipArrowProps} ref={setArrowRef}>
                  {!slots.arrow &&
                    !components.Arrow &&
                    (arrowSize === '6' ? <IconPolygon /> : arrowSize === '8' ? <IconPolygon2 /> : <IconPolygon3 />)}
                </ArrowComponent>
              ) : null}
            </TooltipComponent>
          </TransitionComponent>
        )}
      </PopperComponent>
    </>
  );
});
