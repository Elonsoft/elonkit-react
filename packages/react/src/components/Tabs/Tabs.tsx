import {
  Children,
  cloneElement,
  CSSProperties,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { TabsProps } from './Tabs.types';

import clsx from 'clsx';
import { getTabsUtilityClass, tabsClasses } from './Tabs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, styled, useTheme, useThemeProps } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { debounce, ownerDocument, ownerWindow, useEventCallback } from '@mui/material/utils';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { detectScrollType, getNormalizedScrollLeft } from '@mui/utils/scrollLeft';

import { TabScrollButton, tabScrollButtonClasses } from './TabScrollButton';

const expandFromCenterKeyframe = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

type TabsOwnerState = {
  centered: TabsProps['centered'];
  classes?: TabsProps['classes'];
  fixed: boolean;
  indicatorColor: TabsProps['indicatorColor'];
  hideScrollbar: boolean;
  scrollableX: boolean;
  scrollButtonsHideMobile: boolean;
  scrollerStyle: { overflow: Overflow | null; scrollbarWidth: number };
  TabIndicatorPosition?: TabsProps['TabIndicatorPosition'];
  TabIndicatorSlidingAnimation?: TabsProps['TabIndicatorSlidingAnimation'];
  visibleScrollbar: TabsProps['visibleScrollbar'];
};

const easeInOutSin = (time: number) => {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
};

const animate = (
  property: 'scrollTop' | 'scrollLeft',
  element: HTMLElement,
  to: number,
  options: { ease?: (time: number) => number; duration?: number }
) => {
  const { ease = easeInOutSin, duration = 300 } = options;
  let start: number | null = null;
  const from = element[property];
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
  };

  const step = (timestamp: number) => {
    if (cancelled) {
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time < 1) {
      requestAnimationFrame(step);
    }
  };

  if (from === to) {
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
};

const ScrollbarSize = ({
  onChange,
  style,
  ...props
}: {
  onChange: (height: number) => void;
  style?: CSSProperties;
  [key: string]: any;
}) => {
  const scrollbarHeight = useRef<number>(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const setMeasurements = () => {
    if (nodeRef.current) {
      scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
    }
  };

  useEnhancedEffect(() => {
    if (nodeRef.current && scrollbarHeight.current) {
      const handleResize = debounce(() => {
        const prevHeight = scrollbarHeight.current;
        setMeasurements();

        if (prevHeight !== scrollbarHeight.current) {
          onChange(scrollbarHeight.current);
        }
      });

      const containerWindow = ownerWindow(nodeRef.current);
      containerWindow.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
      };
    }
  }, [onChange]);

  useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);

  return (
    <div
      ref={nodeRef}
      style={{
        width: 99,
        height: 99,
        position: 'absolute',
        top: -9999,
        overflow: 'scroll',
        ...style
      }}
      {...props}
    />
  );
};

const nextItem = (list: HTMLDivElement, item: HTMLElement) => {
  if (list === item) {
    return list.firstChild as HTMLElement;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling as HTMLElement;
  }

  return list.firstChild as HTMLElement;
};

const previousItem = (list: HTMLDivElement, item: HTMLElement) => {
  if (list === item) {
    return list.lastChild as HTMLElement;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling as HTMLElement;
  }

  return list.lastChild as HTMLElement;
};

const moveFocus = (
  list: HTMLDivElement,
  currentFocus: HTMLElement | null,
  traversalFunction: (list: HTMLDivElement, item: HTMLElement) => HTMLElement | null
) => {
  let wrappedOnce = false;
  let nextFocus = currentFocus && traversalFunction(list, currentFocus);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    }

    const nextFocusDisabled = nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

const useUtilityClasses = (ownerState: TabsOwnerState) => {
  const { fixed, hideScrollbar, scrollableX, centered, scrollButtonsHideMobile, classes } = ownerState;

  const slots = {
    root: ['root'],
    scroller: ['scroller', fixed && 'fixed', hideScrollbar && 'hideScrollbar', scrollableX && 'scrollableX'],
    flexContainer: ['flexContainer', centered && 'centered'],
    indicator: ['indicator'],
    scrollButtons: ['scrollButtons', scrollButtonsHideMobile && 'scrollButtonsHideMobile'],
    scrollableX: [scrollableX && 'scrollableX'],
    hideScrollbar: [hideScrollbar && 'hideScrollbar'],
    tabsDivider: ['tabsDivider']
  };

  return composeClasses(slots, getTabsUtilityClass, classes);
};

const TabsRoot = styled('div', {
  name: 'ESTabs',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${tabsClasses.scrollButtons}`]: styles.scrollButtons },
      {
        [`& .${tabsClasses.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
      },
      styles.root,
      ownerState.vertical && styles.vertical
    ];
  }
})<{ ownerState: TabsOwnerState }>(({ ownerState, theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  display: 'flex',
  ...(ownerState.scrollButtonsHideMobile && {
    [`& .${tabsClasses.scrollButtons}`]: {
      [theme.breakpoints.down('tabletXS')]: {
        display: 'none'
      }
    }
  })
}));

const TabsScroller = styled('div', {
  name: 'ESTabs',
  slot: 'Scroller',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.scroller,
      ownerState.fixed && styles.fixed,
      ownerState.hideScrollbar && styles.hideScrollbar,
      ownerState.scrollableX && styles.scrollableX,
      ownerState.scrollableY && styles.scrollableY
    ];
  }
})<{ ownerState: TabsOwnerState }>(({ ownerState }) => ({
  position: 'relative',
  display: 'inline-block',
  flex: '1 1 auto',
  whiteSpace: 'nowrap',
  overflow: ownerState.scrollerStyle.overflow as Overflow,
  marginBottom: ownerState.visibleScrollbar ? undefined : -ownerState.scrollerStyle.scrollbarWidth,

  ...(ownerState.fixed && {
    overflowX: 'hidden',
    width: '100%'
  }),
  ...(ownerState.hideScrollbar && {
    // Hide dimensionless scrollbar on macOS
    // Firefox
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      // Safari + Chrome
      display: 'none'
    }
  }),
  ...(ownerState.scrollableX && {
    overflowX: 'auto',
    overflowY: 'hidden'
  })
}));

const FlexContainer = styled('div', {
  name: 'ESTabs',
  slot: 'FlexContainer',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.flexContainer,
      ownerState.vertical && styles.flexContainerVertical,
      ownerState.centered && styles.centered
    ];
  }
})<{ ownerState: TabsOwnerState }>(({ ownerState }) => ({
  display: 'flex',
  padding: '0 16px',
  ...(ownerState.centered && {
    justifyContent: 'center'
  })
}));

const TabsIndicator = styled('span', {
  name: 'ESTabs',
  slot: 'Indicator',
  overridesResolver: (props, styles) => styles.indicator
})<{ ownerState: TabsOwnerState }>(({ ownerState, theme }) => ({
  position: 'absolute',
  height: 2,

  ...(ownerState.TabIndicatorSlidingAnimation === 'expandFromCenter' && {
    animationName: expandFromCenterKeyframe,
    animationDuration: '0.200s'
  }),

  ...(ownerState.TabIndicatorSlidingAnimation &&
    typeof ownerState.TabIndicatorSlidingAnimation === 'object' && {
      transition: theme.transitions.create(['left', 'right'], {
        duration: ownerState.TabIndicatorSlidingAnimation.duration,
        easing: ownerState.TabIndicatorSlidingAnimation.easing,
        delay: ownerState.TabIndicatorSlidingAnimation.delay
      })
    }),

  ...(ownerState.TabIndicatorPosition === 'top' ? { top: 0 } : { bottom: 0 }),
  ...(ownerState.indicatorColor === 'primary' && {
    backgroundColor: theme.palette.primary.main
  }),
  ...(ownerState.indicatorColor === 'secondary' && {
    backgroundColor: theme.palette.secondary.main
  })
}));

const TabsScrollbarSize = styled(ScrollbarSize)({
  overflowX: 'auto',
  overflowY: 'hidden',
  // Hide dimensionless scrollbar on macOS
  // Firefox
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    // Safari + Chrome
    display: 'none'
  }
});

const TabsDivider = styled(Divider, {
  name: 'ESTabs',
  slot: 'TabsDivider',
  overridesResolver: (props, styles) => [styles.tabsDivider]
})<{ ownerState: TabsOwnerState }>(({ ownerState, theme }) => ({
  position: 'absolute',
  zIndex: 3,
  width: '100%',
  borderColor: theme.palette.monoA.A100,

  ...(ownerState.TabIndicatorPosition === 'top' ? { top: 0 } : { bottom: 0 })
}));

const defaultIndicatorStyle: { [key: string]: number } = {};
let warnedOnceTabPresent = false;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(inProps: TabsProps, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = 'div',
    allowScrollButtonsMobile = false,
    indicatorColor = 'primary',
    onChange,
    ScrollButtonComponent = TabScrollButton,
    scrollButtons = 'auto',
    selectionFollowsFocus,
    slots = {},
    TabIndicatorAlignment = 'center',
    TabIndicatorSlidingAnimation,
    TabIndicatorPosition = 'bottom',
    TabIndicatorWidth = '100%',
    TabIndicatorProps = {},
    TabScrollButtonProps = {},
    value,
    variant = 'standard',
    visibleScrollbar = false,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTabs' });
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const scrollable = variant === 'scrollable';

  const scrollStart = 'scrollLeft';
  const start = 'left';
  const end = 'right';
  const clientSize = 'clientWidth';
  const size = 'width';
  const startIndicator: 'right' | 'left' = isRtl ? 'right' : 'left';

  if (centered && scrollable) {
    console.error(
      'You can not use the `centered={true}` and `variant="scrollable"` properties ' +
        'at the same time on a `Tabs` component.'
    );
  }

  const [mounted, setMounted] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = useState(false);
  const [displayEndScroll, setDisplayEndScroll] = useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = useState(false);

  const [scrollerStyle, setScrollerStyle] = useState<{ overflow: Overflow | null; scrollbarWidth: number }>({
    overflow: 'hidden',
    scrollbarWidth: 0
  });

  const valueToIndex = new Map();
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const ownerState = {
    ...props,
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    scrollButtons,
    scrollerStyle,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: !!scrollable,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile,
    TabIndicatorPosition,
    TabIndicatorSlidingAnimation
  };

  const classes = useUtilityClasses(ownerState);

  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;

    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      // create a new object with ClientRect class props + scrollLeft
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, isRtl ? 'rtl' : 'ltr'),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    let tabMeta;
    if (tabListRef.current && tabsNode && value !== false) {
      const children = tabListRef.current.children;

      if (children.length > 0) {
        const tab = children[valueToIndex.get(value)];
        if (process.env.NODE_ENV !== 'production') {
          if (!tab) {
            console.error(
              [
                `The \`value\` provided to the Tabs component is invalid.`,
                `None of the Tabs' children match with "${value}".`,
                valueToIndex.keys
                  ? `You can provide one of the following values: ${Array.from(valueToIndex.keys()).join(', ')}.`
                  : null
              ].join('\n')
            );
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;

        if (
          tabsMeta &&
          !warnedOnceTabPresent &&
          tabMeta &&
          tabMeta.width === 0 &&
          tabMeta.height === 0 &&
          // if the whole Tabs component is hidden, don't warn
          tabsMeta.clientWidth !== 0
        ) {
          tabsMeta = null;
          console.error(
            [
              'The `value` provided to the Tabs component is invalid.',
              `The Tab with this \`value\` ("${value}") is not part of the document layout.`,
              "Make sure the tab item is present in the document or that it's not `display: none`."
            ].join('\n')
          );

          warnedOnceTabPresent = true;
        }
      }
    }
    return { tabsMeta, tabMeta };
  };

  const updateIndicatorState = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();
    let startValue = 0;
    let modifiedIndicatorWidth = 0;

    if (tabMeta && tabsMeta) {
      const correction = isRtl
        ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth
        : tabsMeta.scrollLeft;

      startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
    }

    if (tabMeta && indicatorStyle[size] && TabIndicatorAlignment) {
      const sizeDiff = tabMeta[size] - indicatorStyle[size];

      switch (TabIndicatorAlignment) {
        case 'center':
          startValue -= sizeDiff / 2;
        case 'right':
          startValue += sizeDiff;
      }
    }

    if (TabIndicatorWidth) {
      const isWidthInPx = TabIndicatorWidth.includes('px');
      const isWidthInPercentage = TabIndicatorWidth.includes('%');
      const indicatorWidthInPx = +TabIndicatorWidth.split('px')[0];
      const indicatorWidthOfTabWidth = (+TabIndicatorWidth.split('%')[0] / 100) * (tabMeta ? tabMeta[size] : 0);

      modifiedIndicatorWidth = isWidthInPx
        ? indicatorWidthInPx
        : isWidthInPercentage
          ? indicatorWidthOfTabWidth
          : +TabIndicatorWidth;
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? (TabIndicatorWidth ? modifiedIndicatorWidth : tabMeta[size]) : 0
    };

    // IE11 support, replace with Number.isNaN
    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  const scroll = (scrollValue: number, { animation = true }: { animation?: unknown | boolean } = {}) => {
    if (animation && tabsRef.current) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else if (tabsRef.current) {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };

  const moveTabsScroll = (delta: number) => {
    if (tabsRef.current) {
      let scrollValue = tabsRef.current[scrollStart];

      scrollValue += delta * (isRtl ? -1 : 1);
      // Fix for Edge
      scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;

      scroll(scrollValue);
    }
  };

  const getScrollSize = () => {
    if (tabsRef.current && tabListRef.current) {
      const containerSize = tabsRef.current[clientSize];
      let totalSize = 0;
      const children = Array.from(tabListRef.current.children);

      for (let i = 0; i < children.length; i += 1) {
        const tab = children[i];
        if (totalSize + tab[clientSize] > containerSize) {
          // If the first item is longer than the container size, then only scroll
          // by the container size.
          if (i === 0) {
            totalSize = containerSize;
          }
          break;
        }
        totalSize += tab[clientSize];
      }

      return totalSize;
    }

    return 0;
  };

  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };

  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };

  const handleScrollbarSizeChange = useCallback((scrollbarWidth) => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);

  const getConditionalElements = () => {
    const conditionalElements: {
      scrollbarSizeListener: JSX.Element | null;
      scrollButtonStart: JSX.Element | null;
      scrollButtonEnd: JSX.Element | null;
    } = {
      scrollbarSizeListener: null,
      scrollButtonStart: null,
      scrollButtonEnd: null
    };

    conditionalElements.scrollbarSizeListener = scrollable ? (
      <TabsScrollbarSize
        className={clsx(classes.scrollableX, classes.hideScrollbar)}
        onChange={handleScrollbarSizeChange}
      />
    ) : null;

    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons =
      scrollable && ((scrollButtons === 'auto' && scrollButtonsActive) || scrollButtons === true);

    const tabListHeight = tabListRef.current?.clientHeight;

    conditionalElements.scrollButtonStart = showScrollButtons ? (
      <ScrollButtonComponent
        direction={isRtl ? 'right' : 'left'}
        disabled={!displayStartScroll}
        slots={{ StartScrollButtonIcon: slots.StartScrollButtonIcon }}
        tabListHeight={tabListHeight}
        onClick={handleStartScrollClick}
        {...TabScrollButtonProps}
        className={clsx(classes.scrollButtons, TabScrollButtonProps.className)}
      />
    ) : null;

    conditionalElements.scrollButtonEnd = showScrollButtons ? (
      <ScrollButtonComponent
        direction={isRtl ? 'left' : 'right'}
        disabled={!displayEndScroll}
        slots={{ EndScrollButtonIcon: slots.EndScrollButtonIcon }}
        tabListHeight={tabListHeight}
        onClick={handleEndScrollClick}
        {...TabScrollButtonProps}
        className={clsx(classes.scrollButtons, TabScrollButtonProps.className)}
      />
    ) : null;

    return conditionalElements;
  };

  const scrollSelectedIntoView = useEventCallback((animation) => {
    const { tabsMeta, tabMeta } = getTabsMeta();
    const tabScrollButtonOffset = document
      .querySelector(`.${tabScrollButtonClasses.root}`)
      ?.getBoundingClientRect().width;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart - (tabScrollButtonOffset ? tabScrollButtonOffset : 0), { animation });
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart + (tabScrollButtonOffset ? tabScrollButtonOffset : 0), { animation });
    }
  });

  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      // If the Tabs component is replaced by Suspense with a fallback, the last
      // ResizeObserver's handler that runs because of the change in the layout is trying to
      // access a dom node that is no longer there (as the fallback component is being shown instead).
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });

    let resizeObserver: ResizeObserver;

    /**
     * @type {MutationCallback}
     */
    const handleMutation = (records: MutationRecord[]) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          if (item.nodeType === Node.ELEMENT_NODE) {
            resizeObserver?.unobserve(item as HTMLElement);
          }
        });
        record.addedNodes.forEach((item) => {
          if (item.nodeType === Node.ELEMENT_NODE) {
            resizeObserver?.observe(item as HTMLElement);
          }
        });
      });
      handleResize();
      updateScrollButtonState();
    };

    if (tabsRef.current && tabListRef.current) {
      const win = ownerWindow(tabsRef.current);
      win.addEventListener('resize', handleResize);

      let mutationObserver: MutationObserver;

      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(handleResize);
        Array.from(tabListRef.current.children).forEach((child) => {
          resizeObserver.observe(child);
        });
      }

      if (typeof MutationObserver !== 'undefined') {
        mutationObserver = new MutationObserver(handleMutation);
        mutationObserver.observe(tabListRef.current, {
          childList: true
        });
      }

      return () => {
        handleResize.clear();
        win.removeEventListener('resize', handleResize);
        mutationObserver?.disconnect();
        resizeObserver?.disconnect();
      };
    }
  }, [updateIndicatorState, updateScrollButtonState]);

  /**
   * Toggle visibility of start and end scroll buttons
   * Using IntersectionObserver on first and last Tabs.
   */
  useEffect(() => {
    if (tabListRef.current) {
      const tabListChildren = Array.from(tabListRef.current.children);
      const length = tabListChildren.length;

      if (typeof IntersectionObserver !== 'undefined' && length > 0 && scrollable && scrollButtons !== false) {
        const firstTab = tabListChildren[0];
        const lastTab = tabListChildren[length - 1];
        const observerOptions = {
          root: tabsRef.current,
          threshold: 0.99
        };

        const handleScrollButtonStart = (entries: IntersectionObserverEntry[]) => {
          setDisplayStartScroll(!entries[0].isIntersecting);
        };
        const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
        firstObserver.observe(firstTab);

        const handleScrollButtonEnd = (entries: IntersectionObserverEntry[]) => {
          setDisplayEndScroll(!entries[0].isIntersecting);
        };
        const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
        lastObserver.observe(lastTab);

        return () => {
          firstObserver.disconnect();
          lastObserver.disconnect();
        };
      }

      return undefined;
    }
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    updateIndicatorState();
  });

  useEffect(() => {
    // Don't animate on the first render.
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);

  useImperativeHandle(
    action,
    () => ({
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    }),
    [updateIndicatorState, updateScrollButtonState]
  );

  const indicator = (
    <TabsIndicator
      key={TabIndicatorSlidingAnimation === 'expandFromCenter' ? indicatorStyle[startIndicator] : undefined}
      {...TabIndicatorProps}
      className={clsx(classes.indicator, TabIndicatorProps.className)}
      ownerState={ownerState}
      style={{
        ...indicatorStyle,
        ...TabIndicatorProps.style
      }}
    />
  );

  let childIndex = 0;
  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return cloneElement(child as ReactElement, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      rounded: props.rounded,
      value: childValue,
      ...(childIndex === 1 && value === false && !child.props.tabIndex ? { tabIndex: 0 } : {})
    });
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (tabListRef.current) {
      const list = tabListRef.current;
      const currentFocus = ownerDocument(list).activeElement as HTMLElement;
      // Keyboard navigation assumes that [role="tab"] are siblings
      // though we might warn in the future about nested, interactive elements
      // as a a11y violation
      const role = currentFocus.getAttribute('role');
      if (role !== 'tab') {
        return;
      }

      let previousItemKey = 'ArrowLeft';
      let nextItemKey = 'ArrowRight';
      if (isRtl) {
        // swap previousItemKey with nextItemKey
        previousItemKey = 'ArrowRight';
        nextItemKey = 'ArrowLeft';
      }

      switch (event.key) {
        case previousItemKey:
          event.preventDefault();
          moveFocus(list, currentFocus, previousItem);
          break;
        case nextItemKey:
          event.preventDefault();
          moveFocus(list, currentFocus, nextItem);
          break;
        case 'Home':
          event.preventDefault();
          moveFocus(list, null, nextItem);
          break;
        case 'End':
          event.preventDefault();
          moveFocus(list, null, previousItem);
          break;
        default:
          break;
      }
    }
  };

  const conditionalElements = getConditionalElements();

  return (
    <TabsRoot ref={ref} as={component} className={clsx(classes.root, className)} ownerState={ownerState} {...props}>
      {conditionalElements.scrollButtonStart}
      {conditionalElements.scrollbarSizeListener}
      <TabsScroller ref={tabsRef} className={classes.scroller} ownerState={ownerState}>
        {/* The tablist isn't interactive but the tabs are */}
        <FlexContainer
          ref={tabListRef}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={classes.flexContainer}
          ownerState={ownerState}
          role="tablist"
          onKeyDown={handleKeyDown}
        >
          {children}
        </FlexContainer>
        {mounted && indicator}
      </TabsScroller>
      <TabsDivider className={classes.tabsDivider} ownerState={ownerState} />
      {conditionalElements.scrollButtonEnd}
    </TabsRoot>
  );
});
