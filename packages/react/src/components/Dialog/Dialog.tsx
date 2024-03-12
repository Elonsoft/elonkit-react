import { forwardRef, useRef } from 'react';

import { DialogProps } from './Dialog.types';

import clsx from 'clsx';
import { dialogClasses, getDialogUtilityClass } from './Dialog.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { duration, styled, useThemeProps } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { unstable_useId as useId } from '@mui/utils';

type DialogOwnerState = {
  classes?: DialogProps['classes'];
  fullWidth?: DialogProps['fullWidth'];
  fullScreen?: DialogProps['fullScreen'];
  align?: DialogProps['align'];
};

const useUtilityClasses = (ownerState: DialogOwnerState) => {
  const { classes, fullWidth, fullScreen, align } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: [
      'wrapper',
      align === 'center' && 'wrapperAlignCenter',
      align === 'flex-start' && 'wrapperAlignFlexStart',
      align === 'flex-start' && 'wrapperAlignFlexEnd',
      fullScreen && 'wrapperFullScreen'
    ],
    container: ['container'],
    content: ['content', fullWidth && 'contentFullWidth', fullScreen && 'contentFullScreen'],
    paper: ['paper', fullScreen && 'paperFullScreen']
  };

  return composeClasses(slots, getDialogUtilityClass, classes);
};

const DialogRoot = styled(Modal, {
  name: 'ESDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});

const DialogBackdrop = styled(Backdrop, {
  name: 'ESDialog',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => styles.backdrop
})(({ theme }) => ({
  // Improve scrollable dialog support.
  zIndex: -1,
  backgroundColor: theme.palette.overlay[700]
}));

const DialogContainer = styled('div', {
  name: 'ESDialog',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  height: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',
  textAlign: 'center',

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

const DialogWrapper = styled('div', {
  name: 'ESDialog',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.wrapper,
      ownerState.align === 'center' && styles.wrapperAlignCenter,
      ownerState.align === 'flex-start' && styles.wrapperAlignFlexStart,
      ownerState.align === 'flex-end' && styles.wrapperAlignFlexEnd,
      ownerState.fullScreen && styles.wrapperFullScreen
    ];
  }
})<{ ownerState: DialogOwnerState }>(({ ownerState }) => ({
  verticalAlign: 'middle',
  position: 'relative',
  width: '100%',
  minHeight: '100%',
  display: 'inline-flex',
  alignItems: ownerState.align,
  justifyContent: 'center',
  margin: 0,
  overflow: 'visible',

  [`&.${dialogClasses.wrapperFullScreen}`]: {
    height: '100%'
  }
}));

const DialogContent = styled('div', {
  name: 'ESDialog',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.content,
      ownerState.fullWidth && styles.contentFullWidth,
      ownerState.fullScreen && styles.contentFullScreen
    ];
  }
})<{ ownerState: DialogOwnerState }>(({ theme, ownerState }) => ({
  position: 'relative',
  overflowY: 'auto',
  display: 'inline-block',
  verticalAlign: 'middle',
  overflow: 'visible',
  margin: '16px',

  [theme.breakpoints.up('tabletXS')]: {
    position: 'static',
    margin: '40px 88px'
  },

  '@media print': {
    overflowY: 'visible'
  },

  ...(ownerState.fullWidth && {
    width: '100%'
  }),
  ...(ownerState.fullScreen && {
    margin: '0 !important',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0,

    [`& > .ESDialog-paper`]: {
      height: '100%',
      borderRadius: 0
    }
  })
}));

const DialogPaper = styled('div', {
  name: 'ESDialog',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.paper, ownerState.fullScreen && styles.paperFullScreen];
  }
})<{ ownerState: DialogOwnerState }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  borderRadius: 8,
  width: '100%',
  boxShadow: theme.palette.shadow.down[900],
  backgroundColor: theme.palette.surface[600],

  '& .ESDialogActions-root': {
    marginTop: 'auto'
  },

  '@media print': {
    boxShadow: 'none'
  }
}));

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 */
export const Dialog = forwardRef<HTMLDivElement | null, DialogProps>(function Dialog(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiDialog' });
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    children,
    before,
    after,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = fullScreen,
    maxWidth = '100%',
    align = 'center',
    onBackdropClick,
    onClose,
    open,
    BackdropProps,
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;

  const ownerState = {
    ...props,
    fullScreen,
    fullWidth,
    scroll,
    align
  };

  const classes = useUtilityClasses(ownerState);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const backdropClick = useRef<boolean | null>(null);

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.

    if (wrapperRef.current && wrapperRef.current === event.target) {
      backdropClick.current = true;
    } else {
      backdropClick.current = false;
    }
  };

  const onDialogBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
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

  return (
    <DialogRoot
      ref={ref}
      closeAfterTransition
      BackdropComponent={DialogBackdrop}
      BackdropProps={{
        transitionDuration,
        ...BackdropProps
      }}
      className={clsx(classes.root, className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      open={open || false}
      onClick={onDialogBackdropClick}
      onClose={onClose}
      {...other}
    >
      <TransitionComponent appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
        <DialogContainer className={classes.container} onMouseDown={onMouseDown}>
          <DialogWrapper
            ref={wrapperRef}
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            className={classes.wrapper}
            ownerState={ownerState}
            role="dialog"
          >
            <DialogContent className={classes.content} ownerState={ownerState} style={{ maxWidth }}>
              {before}
              <DialogPaper className={classes.paper} ownerState={ownerState}>
                {children}
              </DialogPaper>
              {after}
            </DialogContent>
          </DialogWrapper>
        </DialogContainer>
      </TransitionComponent>
    </DialogRoot>
  );
});
