import { FC } from 'react';

import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';

import { useSnackbarContext } from './Snackbar.context';
import { SnackbarClose } from './SnackbarClose';
import { SnackbarProvider } from './SnackbarProvider';

import { IconCloseSm, IconSuccess } from '../../icons';

export const Demo: Story = (args: Args, context: StoryContext<ReactFramework>) => {
  const { maxSnack, timeout, anchorOrigin } = args;

  return (
    <SnackbarProvider maxSnack={maxSnack} timeout={timeout} anchorOrigin={anchorOrigin}>
      <DemoComponent locale={context.globals.locale} />
    </SnackbarProvider>
  );
};

const DemoComponent: FC<{ locale: string }> = ({ locale }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbarContext();

  const onClick = () => {
    const key = enqueueSnackbar(`Hello World!`, {
      icon: <IconSuccess />,
      autoHideDuration: 5000,
      action: ({ autoHideDuration, persist }) => (
        <SnackbarClose autoHideDuration={autoHideDuration} persist={persist} onClick={() => closeSnackbar(key)}>
          <IconCloseSm />
        </SnackbarClose>
      )
    });
  };

  return <Button onClick={onClick}>{locale === 'en' ? 'Open snackbar' : 'Открыть снекбар'}</Button>;
};
