import { Story } from '@storybook/react';

import Button from '@mui/material/Button';

import { useSnackbarContext } from './Snackbar.context';
import { SnackbarProvider } from './SnackbarProvider';

export const Demo: Story = ({ maxSnack }) => {
  return (
    <SnackbarProvider maxSnack={maxSnack}>
      <DemoComponent />
    </SnackbarProvider>
  );
};

const DemoComponent = () => {
  const { enqueueSnackbar } = useSnackbarContext();

  const onClick = () => {
    enqueueSnackbar(`Hello Snack`, {
      //action,
      autoHideDuration: 2000,
      timeout: 600
      // customSnackbar
    });
  };

  return <Button onClick={onClick}>Open snackbar</Button>;
};
