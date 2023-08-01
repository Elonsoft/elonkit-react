import { useState } from 'react';

import { Story } from '@storybook/react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

import { IconClose, IconSuccess } from '../../../icons';

export const Demo: Story = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  const onClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={onClick}>Open snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        action={
          <>
            <Button onClick={onClose} color="inherit">
              Отменить
            </Button>

            <IconButton aria-label="close" color="inherit" onClick={onClose}>
              <IconClose />
            </IconButton>
          </>
        }
        message={
          <>
            <IconSuccess />
            Текст
          </>
        }
      />
    </div>
  );
};
