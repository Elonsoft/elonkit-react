import { FC, useCallback, useMemo, useReducer } from 'react';

import { ISnackOptions, SnackbarProviderProps } from './SnackbarProvider.types';

import clsx from 'clsx';
import { getSnackbarProviderUtilityClass } from './SnackbarProvider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import { Snackbar } from './Snackbar';
import { SnackbarContext } from './Snackbar.context';

import { IconSuccess } from '../../icons';

interface ISnack extends ISnackOptions {
  message?: string;
  id: number;
  checked?: boolean;
}

type SnackbarProviderOwnerState = {
  classes?: SnackbarProviderProps['classes'];
};

const useUtilityClasses = (ownerState: SnackbarProviderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSnackbarProviderUtilityClass, classes);
};

const SnackbarProviderRoot = styled('div', {
  name: 'ESSnackbarProvider',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: '9px'
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

interface IState {
  snacks: ISnack[];
  queue: ISnack[];
}

interface IPayload extends ISnack {
  maxSnack?: number;
}

const initialState: IState = { snacks: [], queue: [] };

function reducer(state: IState, action: { type: string; payload?: IPayload }) {
  switch (action.type) {
    case 'enqueue': {
      const newState = { ...state };

      if (action?.payload?.maxSnack) {
        if (newState.snacks.length < action.payload.maxSnack) {
          newState.snacks = [action.payload, ...newState.snacks];
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

export const SnackbarProvider: FC<SnackbarProviderProps> & { snackId: number } = (inProps) => {
  const { className, sx, children, maxSnack, labelCloseAll, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarProvider'
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const enqueueSnackbar = useCallback(
    (message: string, options: ISnackOptions): number => {
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

  const onClose = (id: number) => () => {
    dispatch({ type: 'close', payload: { id, maxSnack } });
  };

  const onExited = (id: number) => () => {
    dispatch({ type: 'exited', payload: { id } });
  };

  const onCloseAll = () => {
    dispatch({ type: 'closeAll' });
  };

  const value = useMemo(() => {
    return {
      enqueueSnackbar
    };
  }, [enqueueSnackbar]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarContext.Provider value={value}>
      <SnackbarProviderRoot className={clsx(classes.root, className)} sx={sx}>
        <Collapse in={state.snacks.length >= 2}>
          <SnackbarProviderCloseAll color="inherit" onClick={onCloseAll}>
            <Typography component="div" variant="caption">
              {labelCloseAll}
            </Typography>
          </SnackbarProviderCloseAll>
        </Collapse>

        {state.snacks.map((snack) => (
          <Collapse key={snack.id} in={snack.checked}>
            <Slide direction="right" in={snack.checked} timeout={snack.timeout} onExited={onExited(snack.id)}>
              <Snackbar
                autoHideDuration={snack.autoHideDuration}
                onClose={onClose(snack.id)}
                action={snack.action}
                customSnackbar={snack.customSnackbar}
                message={snack.message}
                icon={<IconSuccess />}
              />
            </Slide>
          </Collapse>
        ))}
      </SnackbarProviderRoot>

      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.snackId = 0;
