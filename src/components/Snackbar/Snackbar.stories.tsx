import { Story } from '@storybook/react';

import Button from '@mui/material/Button';

import { useSnackbarContext } from './Snackbar.context';
import { SnackbarAction } from './SnackbarAction';
import { SnackbarProvider } from './SnackbarProvider';

import { IconClose, IconSuccess } from '../../icons';

export const Demo: Story = ({ maxSnack, timeout, anchorOrigin }, { globals: { locale } }) => (
  <SnackbarProvider maxSnack={maxSnack} timeout={timeout} anchorOrigin={anchorOrigin} sx={{ width: '440px' }}>
    <DemoComponent locale={locale} />
  </SnackbarProvider>
);

const DemoComponent = ({ locale }: { locale: string }) => {
  const { enqueueSnackbar, onCloseSnackbar } = useSnackbarContext();

  const onClick = () => {
    const key = enqueueSnackbar(`Your notification!`, {
      icon: <IconSuccess />,
      autoHideDuration: 5000,
      action: ({ autoHideDuration, persist }) => (
        <SnackbarAction autoHideDuration={autoHideDuration} persist={persist} onClick={() => onCloseSnackbar(key)}>
          <IconClose />
        </SnackbarAction>
      )
    });
  };

  return <Button onClick={onClick}>{locale === 'en' ? 'Show snackbar' : 'Показать снекбар'}</Button>;
};
