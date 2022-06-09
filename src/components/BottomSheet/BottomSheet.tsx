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

import { BottomSheetContext } from './BottomSheet.context';
import { useSwipeable } from './useSwipe';

import { useWindowEventListener } from '../../hooks/useWindowEventListener';

import { unstable_useId as useId } from '@mui/utils';
import { useDrag, useGesture } from '@use-gesture/react';

type BottomSheetOwnerState = {
  classes?: BottomSheetProps['classes'];
  isScrollVisible: boolean;
  isCollapsed: boolean;
  isFullHeight: boolean;
  isOpen: boolean;
  transitionDuration: number;
  align: BottomSheetProps['align'];
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
  backgroundColor: theme.palette.overlay.modal
}));

const BottomSheetContainer = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})<{ ownerState: BottomSheetOwnerState }>(({ ownerState }) => ({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  height: '100%',
  overflowY: ownerState.isScrollVisible ? 'scroll' : 'hidden',
  overflowX: 'hidden',
  textAlign: 'center',
  scrollbarGutter: 'stable',
  overscrollBehavior: 'none',

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
  overflow: 'visible',

  '&, & *': {
    // touchAction: 'none'
  }
}));

const BottomSheetContent = styled('div', {
  name: 'ESBottomSheet',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: BottomSheetOwnerState }>(({ theme, ownerState }) => ({
  position: 'relative',
  overflowY: 'auto',
  display: 'inline-block',
  verticalAlign: 'middle',
  overflow: 'visible',
  width: '100%',
  marginTop: ownerState.isCollapsed ? '40vh' : '0px',
  transition: !ownerState.isOpen ? 'none' : `margin-top ${ownerState.transitionDuration}ms`,
  willChange: 'auto',

  '@media print': {
    overflowY: 'visible'
  }
}));

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

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

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
    collapse,
    collapseScreenHeight = 480,
    ...other
  } = props;

  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const backdropClick = useRef<boolean | null>(null);

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

  const ariaLabelledby = useId(ariaLabelledbyProp);

  const duration = typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.enter || 0;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);

  const [isCollapsed, setCollapsed] = useState(false);
  const [isShouldCollapse, setShouldCollapse] = useState(false);
  const [isScrollVisible, setScrollVisible] = useState(false);
  const [isFullHeight, setFullHeight] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onScroll = () => {
    if (contentRef.current) {
      setFullHeight(contentRef.current.getBoundingClientRect().top <= 0);
    }
  };

  const onResize = () => {
    onScroll();

    if (paperRef.current) {
      const isShouldCollapseNext =
        collapse && window.innerHeight > collapseScreenHeight
          ? paperRef.current.scrollHeight > window.innerHeight * 0.7
          : false;
      if (isShouldCollapse !== isShouldCollapseNext) {
        setCollapsed(isShouldCollapseNext);
        setShouldCollapse(isShouldCollapseNext);
        setScrollVisible(!isShouldCollapseNext);
      }
    }
  };

  useWindowEventListener('resize', onResize);

  const onEnter = () => {
    setOpen(false);
    setScrollVisible(false);
    onScroll();

    if (paperRef.current) {
      const isShouldCollapse =
        collapse && window.innerHeight > collapseScreenHeight
          ? paperRef.current.scrollHeight > window.innerHeight * 0.7
          : false;
      setCollapsed(isShouldCollapse);
      setShouldCollapse(isShouldCollapse);
    }
  };

  const onEntered = () => {
    setOpen(true);
    onScroll();
    setScrollVisible(!isCollapsed);
  };

  const onExit = () => {
    setScrollVisible(false);
  };

  const bind = useSwipeable({
    onSwipedDown: () => {
      if (containerRef.current && containerRef.current.scrollTop <= 0 && onClose) {
        if (isFullHeight) {
          if (isShouldCollapse) {
            setCollapsed(true);
            setScrollVisible(false);
          }
        } else {
          onClose({}, 'backdropClick');
        }
      }
    },
    onSwipedUp: () => {
      setCollapsed(false);
      setScrollVisible(true);
    },
    swipeDuration: 250
  });

  useEffect(() => {
    bind.ref(wrapperRef);
  }, [wrapperRef]);

  const onWheel = (event: WheelEvent) => {
    if (isCollapsed && event.deltaY > 0) {
      setCollapsed(false);
      setScrollVisible(true);
    }
  };

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
      isScrollVisible,
      isCollapsed,
      isFullHeight
    }),
    [isScrollVisible, isCollapsed, isFullHeight]
  );

  const ownerState = {
    ...props,
    align,
    isScrollVisible,
    isCollapsed,
    isFullHeight,
    isOpen,
    transitionDuration: duration
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <BottomSheetRoot
      className={clsx(classes.root, className)}
      BackdropProps={{
        transitionDuration
      }}
      closeAfterTransition
      BackdropComponent={BottomSheetBackdrop}
      disableEscapeKeyDown={disableEscapeKeyDown}
      onClose={onClose}
      open={open}
      ref={ref}
      onClick={onBottomSheetBackdropClick}
      onWheel={onWheel as any}
      {...other}
    >
      <TransitionComponent appear in={open} timeout={transitionDuration} role="presentation" {...TransitionProps}>
        <BottomSheetContainer
          ref={containerRef}
          className={classes.container}
          ownerState={ownerState}
          onMouseDown={onMouseDown}
        >
          <BottomSheetWrapper
            ref={setWrapperRef}
            className={classes.wrapper}
            ownerState={ownerState}
            role="dialog"
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            onMouseDown={bind.onMouseDown}
          >
            <BottomSheetContent
              ref={contentRef}
              className={classes.content}
              ownerState={ownerState}
              style={{ maxWidth }}
              onTransitionEnd={onScroll}
            >
              <Slide
                direction="up"
                in={open}
                timeout={transitionDuration}
                onEnter={onEnter}
                onEntered={onEntered}
                onExit={onExit}
              >
                <BottomSheetPaper ref={paperRef} className={classes.paper} ownerState={ownerState}>
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
