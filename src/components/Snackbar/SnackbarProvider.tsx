import { FC, useCallback, useMemo, useReducer } from 'react';

import { BaseSnackbarOptions, SnackbarProps } from './Snackbar.types';
import { SnackbarProviderProps } from './SnackbarProvider.types';

import clsx from 'clsx';
import { getSnackbarProviderUtilityClass } from './SnackbarProvider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Slide, { SlideProps } from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import { Snackbar } from './Snackbar';
import { SnackbarContext } from './Snackbar.context';

interface ISnack extends SnackbarProps {
  message?: string;
  id: number;
  checked?: boolean;
  preventDuplicate?: boolean;
}

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
})<{ ownerState: SnackbarProviderOwnerState }>(({ ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  zIndex: '100',
  gap: '8px',

  ...(ownerState?.anchorOrigin?.includes('bottom') && {
    bottom: '9px'
  }),

  ...(ownerState?.anchorOrigin?.includes('top') && {
    flexDirection: 'column-reverse'
  }),

  ...((ownerState?.anchorOrigin === 'bottom-center' || ownerState?.anchorOrigin === 'top-center') && {
    left: '50%',
    transform: `translateX(-50%)`
  }),

  ...(ownerState?.anchorOrigin?.includes('right') && {
    right: '16px'
  })
}));

const SnackbarProviderCloseAll = styled(Button, {
  name: 'ESSnackbarCloseAll',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  '&.MuiButton-root': {
    width: '440px',
    height: '32px',
    backgroundColor: theme.palette.monoA.A800,

    '&.MuiButton-text': {
      padding: '8px 16px',
      color: theme.palette.monoB.A900
    }
  }
}));

interface IPayload extends ISnack {
  maxSnack?: number;
}

interface ISnackbarState {
  snacks: ISnack[];
  queue: ISnack[];
}

const initialState: ISnackbarState = { snacks: [], queue: [] };

function reducer(state: ISnackbarState, action: { type: string; payload?: IPayload }) {
  switch (action.type) {
    case 'enqueue': {
      const newState = { ...state };

      if (action?.payload?.maxSnack) {
        if (newState.snacks.length < action.payload.maxSnack) {
          if (
            action.payload.preventDuplicate &&
            ~newState.snacks.findIndex((item) => item.message === action.payload?.message)
          ) {
            newState.snacks = [...newState.snacks];
          } else {
            newState.snacks = [action.payload, ...newState.snacks];
          }
        } else {
          newState.queue = [...newState.queue, action.payload];
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
        newState.snacks = [newState.queue[0], ...newState.snacks];
        newState.queue = newState.queue.slice(1);
      }

      return newState;
    }
    case 'exited': {
      const newState = { ...state };
      newState.snacks = newState.snacks.filter((snack) => snack.id !== action.payload?.id);

      return newState;
    }
    case 'closeAll': {
      return {
        snacks: [],
        queue: []
      };
    }
    default:
      throw new Error();
  }
}

const SLIDE_DIRECTION: Record<NonNullable<SnackbarProviderProps['anchorOrigin']>, SlideProps['direction']> = {
  'top-left': 'right',
  'top-right': 'left',
  'top-center': 'down',
  'bottom-left': 'right',
  'bottom-right': 'left',
  'bottom-center': 'up'
};

export const SnackbarProvider: FC<SnackbarProviderProps> & { snackId: number } = (inProps) => {
  const {
    className,
    sx,
    children,
    maxSnack,
    timeout,
    anchorOrigin = 'bottom-left',
    labelCloseAll,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarProvider'
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const enqueueSnackbar = useCallback(
    (message: string, options?: BaseSnackbarOptions): number => {
      const newSnack = {
        message,
        id: SnackbarProvider.snackId++,
        checked: true,
        ...options
      };

      dispatch({ type: 'enqueue', payload: { ...newSnack, maxSnack } });

      return newSnack.id;
    },
    [maxSnack]
  );

  const closeSnackbar = (id?: number) => {
    id ? dispatch({ type: 'close', payload: { id, maxSnack } }) : dispatch({ type: 'closeAll' });
  };

  const onExited = (id: number) => () => {
    dispatch({ type: 'exited', payload: { id } });
  };

  const value = useMemo(() => {
    return {
      enqueueSnackbar,
      closeSnackbar
    };
  }, [enqueueSnackbar, closeSnackbar]);

  const ownerState = { ...props, anchorOrigin };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarContext.Provider value={value}>
      <SnackbarProviderRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        <Collapse in={state.snacks.length >= 2}>
          <SnackbarProviderCloseAll color="inherit" onClick={() => closeSnackbar()}>
            <Typography component="div" variant="caption">
              {labelCloseAll}
            </Typography>
          </SnackbarProviderCloseAll>
        </Collapse>
        {state.snacks.map((snack) => (
          <Collapse key={snack.id} in={snack.checked}>
            <Slide
              appear
              direction={SLIDE_DIRECTION[anchorOrigin]}
              in={snack.checked}
              timeout={timeout}
              onExited={onExited(snack.id)}
              mountOnEnter
              unmountOnExit
            >
              <div>
                <Snackbar
                  autoHideDuration={snack.autoHideDuration}
                  action={snack.action}
                  customSnackbar={snack.customSnackbar}
                  onClose={() => closeSnackbar(snack.id)}
                  message={snack.message}
                  icon={snack.icon}
                  persist={snack.persist}
                />
              </div>
            </Slide>
          </Collapse>
        ))}
      </SnackbarProviderRoot>

      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.snackId = 0;
