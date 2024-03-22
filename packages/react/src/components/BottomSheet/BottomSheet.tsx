import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { BottomSheetProps } from './BottomSheet.types';

import clsx from 'clsx';
import { getBottomSheetUtilityClass } from './BottomSheet.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { duration, styled, useThemeProps } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { unstable_useId as useId } from '@mui/utils';

import { BottomSheetContext } from './BottomSheet.context';

import { useIntersectionObserver, useResizeObserver, useWindowEventListener } from '../../hooks';

import { useDrag } from '@use-gesture/react';

type BottomSheetOwnerState = {
  classes?: BottomSheetProps['classes'];
  isFullHeight: boolean;
  isLastSnapPoint: boolean;
  isOpen: boolean;
  transitionDuration: number;
  align: BottomSheetProps['align'];
  snapPoint: string;
};

const useUtilityClasses = (ownerState: BottomSheetOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: ['wrapper'],
    container: ['container'],
    content: ['content'],
    paper: ['paper']
  };

  return composeClasses(slots, getBottomSheetUtilityClass, classes);
};

const BottomSheetRoot = styled(Modal, {
  name: 'ESBottomSheet',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});

const BottomSheetBackdrop = styled(Backdrop, {
  name: 'ESBottomSheet',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => styles.backdrop
})(({ theme }) => ({
  // Improve scrollable dialog support.
  zIndex: -1,
  backgroundColor: theme.palette.overlay[700]
}));

const BottomSheetContainer = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})<{ ownerState: BottomSheetOwnerState }>(({ ownerState }) => ({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  textAlign: 'center',
  overscrollBehavior: 'none',
  scrollbarGutter: 'stable',

  '&, & *': {
    touchAction: ownerState.isLastSnapPoint ? 'auto' : 'none'
  },

  '&:after': {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '100%',
    width: '0'
  },
  '@media print': {
    height: 'auto'
  }
}));

const BottomSheetWrapper = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})<{ ownerState: BottomSheetOwnerState }>(({ ownerState }) => ({
  verticalAlign: 'middle',
  position: 'relative',
  width: '100%',
  minHeight: '100%',
  display: 'inline-flex',
  alignItems: ownerState.align,
  justifyContent: 'center',
  margin: 0,
  overflow: 'visible'
}));

const BottomSheetContent = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: BottomSheetOwnerState }>(
  ({ ownerState }) => ({
    position: 'relative',
    overflow: 'visible',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    marginTop: `calc(100vh - ${ownerState.snapPoint})`,
    transition: ownerState.isOpen ? `margin-top ${ownerState.transitionDuration}ms` : 'none',
    willChange: 'auto',

    '@media print': {
      overflowY: 'visible'
    }
  }),
  ({ ownerState }) => ({
    marginTop: `calc(100dvh - ${ownerState.snapPoint})`
  })
);

const BottomSheetPaper = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.paper, ownerState.fullScreen && styles.paperFullScreen];
  }
})<{ ownerState: BottomSheetOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textAlign: 'left',
  width: '100%',
  minHeight: '100%',
  boxShadow: theme.palette.shadow.up[700],
  backgroundColor: theme.palette.surface[600],
  paddingBottom: '1px',

  ...(!ownerState.isFullHeight && {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }),

  '&::after': {
    content: "''",
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '4px',
    borderRadius: '4px',
    backgroundColor: theme.palette.white.A500
  },

  '@media print': {
    boxShadow: 'none'
  }
}));

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.enteringScreen };

const defaultSnapPoints: BottomSheetProps['snapPoints'] = [
  {
    point: '60vh',
    dragThresholds: { up: '15vh', down: '15vh' },
    activeWhen: { screen: { minHeight: 400 }, paperOverflow: true }
  },
  { point: '100vh', dragThresholds: { up: '0px', down: '15vh' } }
];

const getPixelsFromCssUnits = (cssValue: string) => {
  const supportedUnits = {
    px: (value: number) => value,
    vh: (value: number) => (value / 100) * window.innerHeight
  };

  const pattern = new RegExp(`^([\-\+]?(?:\\d+(?:\\.\\d+)?))(${Object.keys(supportedUnits).join('|')})$`, 'i');
  const matches = String.prototype.toString.apply(cssValue).trim().match(pattern);

  if (matches) {
    const value = Number(matches[1]);
    const unit = matches[2].toLocaleLowerCase() as keyof typeof supportedUnits;

    if (unit in supportedUnits) {
      return supportedUnits[unit](value);
    }
  }

  throw new Error('dragThresholds must be specified in px or vh.');
};

/**
 * Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.
 */
export const BottomSheet = forwardRef<HTMLDivElement | null, BottomSheetProps>(function BottomSheet(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiBottomSheet' });
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    children,
    className,
    disableEscapeKeyDown = false,
    maxWidth = '100%',
    align = 'flex-end',
    onBackdropClick,
    onClose,
    open,
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    snapPoints = defaultSnapPoints,
    ...other
  } = props;

  const [activeSnapPoints, setActiveSnapPoints] = useState(snapPoints);
  const [snapPointIndex, setSnapPointIndex] = useState(0);

  const [isFullHeight, setFullHeight] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const backdropClick = useRef<boolean | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const ariaLabelledby = useId(ariaLabelledbyProp);

  const isLastSnapPoint = snapPointIndex >= activeSnapPoints.length - 1;
  const duration = typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.enter || 0;

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.

    if (wrapperRef && wrapperRef === event.target) {
      backdropClick.current = true;
    } else {
      backdropClick.current = false;
    }
  };

  const onBottomSheetBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const onScroll = () => {
    if (containerRef.current) {
      setScrolled(containerRef.current.scrollTop > 0);
    }
  };

  const onResize = (index?: number) => {
    const { innerHeight, innerWidth } = window;

    const activeSnapPoints = snapPoints.filter((s) => {
      if (!s.activeWhen) {
        return true;
      }

      if (s.activeWhen.paperOverflow && (paperRef.current?.scrollHeight || 0) <= innerHeight) {
        return false;
      }

      if (s.activeWhen.screen) {
        if (
          (s.activeWhen.screen.minHeight && innerHeight < s.activeWhen.screen.minHeight) ||
          (s.activeWhen.screen.maxHeight && innerHeight > s.activeWhen.screen.maxHeight) ||
          (s.activeWhen.screen.minWidth && innerWidth < s.activeWhen.screen.minWidth) ||
          (s.activeWhen.screen.maxWidth && innerWidth > s.activeWhen.screen.maxWidth)
        ) {
          return false;
        }
      }

      if (s.activeWhen.fn && !s.activeWhen.fn()) {
        return false;
      }

      return true;
    });

    setSnapPointIndex(Math.min(index || snapPointIndex, activeSnapPoints.length - 1));
    setActiveSnapPoints(activeSnapPoints);
  };

  useWindowEventListener('resize', () => onResize());

  useResizeObserver(contentRef, () => {
    if (contentRef.current) {
      contentRef.current.style.setProperty('--client-height', `${contentRef.current.clientHeight}px`);
    }
  });

  useIntersectionObserver(
    sentinelRef,
    (entries) => {
      setFullHeight(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: '-1px 0px 0px' }
  );

  const onEnter = () => {
    setFullHeight(false);
    setScrolled(false);
    setOpen(false);
    onResize(0);
  };

  const onEntered = () => {
    setOpen(true);
  };

  const changeSnapPointIndex = (delta: -1 | 1) => {
    const newSnapPointIndex = snapPointIndex + delta;

    if (newSnapPointIndex < 0) {
      if (onClose) {
        onClose({}, 'backdropClick');
      }
    } else {
      setSnapPointIndex(Math.min(newSnapPointIndex, activeSnapPoints.length - 1));

      if (contentRef.current && containerRef.current) {
        containerRef.current.style.removeProperty('touch-action');
        containerRef.current.style.removeProperty('overflow');
        contentRef.current.style.removeProperty('margin-top');
        contentRef.current.style.removeProperty('transition');
      }
    }
  };

  const bind = useDrag(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ down, swipe: [_swipeX, swipeY], movement: [_mx, my], type }) => {
      // Allow only types starting with "touch".
      if (type[0] !== 't' || !containerRef.current || !contentRef.current) {
        return;
      }

      if (isScrolled) {
        return;
      }

      if (swipeY) {
        if (swipeY === -1) {
          changeSnapPointIndex(1);
        } else {
          changeSnapPointIndex(-1);
        }
      } else if (down) {
        if (isLastSnapPoint) {
          if (my <= 0) {
            my = 0;
          }
          if (my > 0) {
            containerRef.current.style.setProperty('touch-action', `none`);
            containerRef.current.style.setProperty('overflow', `hidden`);
          }
        }

        const point = activeSnapPoints[snapPointIndex].point;
        const height = point === 'auto' ? `min(100dvh, ${contentRef.current.clientHeight}px)` : point;

        contentRef.current.style.setProperty('transition', `none`);
        contentRef.current.style.setProperty('margin-top', `max(0px, calc(100dvh - ${height} + ${my}px))`);
      } else {
        const up = getPixelsFromCssUnits(activeSnapPoints[snapPointIndex].dragThresholds.up);
        const down = getPixelsFromCssUnits(activeSnapPoints[snapPointIndex].dragThresholds.down);

        if (my < -up) {
          changeSnapPointIndex(1);
        } else if (my > down) {
          changeSnapPointIndex(-1);
        } else {
          containerRef.current.style.removeProperty('touch-action');
          containerRef.current.style.removeProperty('overflow');
          contentRef.current.style.removeProperty('transition');
          contentRef.current.style.removeProperty('margin-top');
        }
      }
    },
    { pointer: { touch: true } }
  );

  useEffect(() => {
    if (open) {
      const overscrollBehaviorY = document.body.style.overscrollBehaviorY;
      document.body.style.overscrollBehaviorY = 'contain';

      return () => {
        document.body.style.overscrollBehaviorY = overscrollBehaviorY;
      };
    }
  }, [open]);

  const value = useMemo(
    () => ({
      isFullHeight
    }),
    [isFullHeight]
  );

  const point = activeSnapPoints[snapPointIndex].point;
  const snapPoint = point === 'auto' ? `min(100dvh, var(--client-height))` : point;

  const ownerState = {
    ...props,
    align,
    isFullHeight,
    isLastSnapPoint,
    isOpen,
    transitionDuration: duration,
    snapPoint
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <BottomSheetRoot
      ref={ref}
      closeAfterTransition
      BackdropComponent={BottomSheetBackdrop}
      BackdropProps={{
        transitionDuration
      }}
      className={clsx(classes.root, className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      open={open}
      onClick={onBottomSheetBackdropClick}
      onClose={onClose}
      {...other}
    >
      <TransitionComponent appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
        <BottomSheetContainer
          ref={containerRef}
          className={classes.container}
          ownerState={ownerState}
          onMouseDown={onMouseDown}
          onScroll={onScroll}
        >
          <BottomSheetWrapper
            ref={setWrapperRef}
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            className={classes.wrapper}
            ownerState={ownerState}
            role="dialog"
            {...bind()}
          >
            <BottomSheetContent
              ref={contentRef}
              className={classes.content}
              ownerState={ownerState}
              style={{ maxWidth }}
            >
              <Slide direction="up" in={open} timeout={transitionDuration} onEnter={onEnter} onEntered={onEntered}>
                <BottomSheetPaper ref={paperRef} className={classes.paper} ownerState={ownerState}>
                  <div ref={sentinelRef} />
                  <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>
                </BottomSheetPaper>
              </Slide>
            </BottomSheetContent>
          </BottomSheetWrapper>
        </BottomSheetContainer>
      </TransitionComponent>
    </BottomSheetRoot>
  );
});
