import { useMemo, useReducer } from 'react';

import { BaseSnackbarOptions } from './Snackbar.types';
import { SnackbarPayload, SnackbarProviderProps, SnackbarState } from './SnackbarProvider.types';

import clsx from 'clsx';
import { getSnackbarProviderUtilityClass } from './SnackbarProvider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Collapse, Fade } from '@mui/material';

import { Snackbar } from './Snackbar';
import { SnackbarContext } from './Snackbar.context';
import { SnackbarCloseAll } from './SnackbarCloseAll';

type SnackbarProviderOwnerState = {
  classes?: SnackbarProviderProps['classes'];
  anchorOrigin?: string;
};

const useUtilityClasses = (ownerState: SnackbarProviderOwnerState) => {
  const { classes, anchorOrigin } = ownerState;

  const slots = {
    root: ['root', anchorOrigin]
  };

  return composeClasses(slots, getSnackbarProviderUtilityClass, classes);
};

const SnackbarProviderRoot = styled('div', {
  name: 'ESSnackbarProvider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { anchorOrigin }
    } = props;

    return [styles.root, styles[anchorOrigin]];
  }
})<{ ownerState: SnackbarProviderOwnerState }>(({ ownerState: { anchorOrigin } }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  gap: '8px',
  zIndex: '1000',

  ...(anchorOrigin?.includes('bottom') && {
    bottom: '9px'
  }),
  ...(anchorOrigin?.includes('top') && {
    flexDirection: 'column-reverse'
  }),
  ...(anchorOrigin?.includes('right') && {
    right: '16px'
  }),
  ...((anchorOrigin === 'bottom-center' || anchorOrigin === 'top-center') && {
    left: '50%',
    transform: `translateX(-50%)`
  })
}));

const initialState: SnackbarState = { snacks: [], queue: [] };

function reducer(state: SnackbarState, action: { type: string; payload?: SnackbarPayload }) {
  switch (action.type) {
    case 'enqueue': {
      const newState = { ...state };

      if (action.payload?.maxSnack) {
        if (newState.snacks.length < action.payload.maxSnack) {
          action.payload.preventDuplicate &&
          ~newState.snacks.findIndex((item) => item.message === action.payload?.message)
            ? (newState.snacks = [...newState.snacks])
            : (newState.snacks = [...newState.snacks, action.payload]);
        } else {
          newState.queue = [action.payload, ...newState.queue];
        }
      }

      return newState;
    }
    case 'close': {
      const newState = { ...state };
      newState.snacks.forEach((snack) => {
        if (snack.id === action.payload?.id) {
          snack.checked = !snack.checked;
        }
      });

      if (newState.queue.length) {
        newState.snacks = [...newState.snacks, newState.queue[newState.queue.length - 1]];
        newState.queue = newState.queue.slice(0, newState.queue.length - 1);
      }

      return newState;
    }
    case 'exited': {
      const newState = { ...state };
      newState.snacks = newState.snacks.filter((snack) => snack.id !== action.payload?.id);

      return newState;
    }
    case 'closeAll': {
      return { snacks: state.snacks.map((snack) => ({ ...snack, checked: false })), queue: [] };
    }
    default:
      throw new Error();
  }
}

export const SnackbarProvider = (inProps: SnackbarProviderProps) => {
  const {
    className,
    children,
    maxSnack,
    timeout = 300,
    anchorOrigin = 'bottom-left',
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarProvider'
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const enqueueSnackbar = (message: string, options?: BaseSnackbarOptions): number => {
    const newSnack = {
      message,
      id: SnackbarProvider.snackId++,
      checked: true,
      ...options
    };

    dispatch({ type: 'enqueue', payload: { maxSnack, ...newSnack } });
    // state.snacks.length >= maxSnack && onCloseSnackbar(state.snacks[maxSnack - 1].id);

    return newSnack.id;
  };

  const onExited = (id: number) => () => {
    dispatch({ type: 'exited', payload: { id } });
  };

  const onCloseSnackbar = (id?: number) => {
    dispatch(id ? { type: 'close', payload: { id, maxSnack } } : { type: 'closeAll' });
  };

  const value = useMemo(() => {
    return { enqueueSnackbar, onCloseSnackbar };
  }, [enqueueSnackbar, onCloseSnackbar]);

  const ownerState = { anchorOrigin, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarContext.Provider value={value}>
      <SnackbarProviderRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        <Collapse in={state.snacks.length >= 3} appear>
          <SnackbarCloseAll onClose={() => onCloseSnackbar()} />
        </Collapse>

        {state.snacks.map((snack) => (
          <Collapse
            key={snack.id}
            in={snack.checked}
            timeout={timeout}
            onExited={onExited(snack.id)}
            appear
            unmountOnExit
            mountOnEnter
          >
            <div>
              <Fade timeout={timeout} in={snack.checked}>
                <div>
                  <Snackbar
                    autoHideDuration={snack.autoHideDuration}
                    action={snack.action}
                    customSnackbar={snack.customSnackbar}
                    onClose={() => onCloseSnackbar(snack.id)}
                    message={snack.message}
                    icon={snack.icon}
                    persist={snack.persist}
                  />
                </div>
              </Fade>
            </div>
          </Collapse>
        ))}
      </SnackbarProviderRoot>
      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.snackId = 1;
