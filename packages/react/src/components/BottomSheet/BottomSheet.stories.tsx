import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BottomSheet } from './BottomSheet';

import { DialogActions, DialogContent, DialogTitle } from '../Dialog';

const getOpenButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open' : 'Открыть';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getCreateButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Create' : 'Создать';
};

const meta: Meta<typeof BottomSheet> = {
  tags: ['autodocs'],
  component: BottomSheet,
  parameters: {
    references: ['BottomSheet']
  },
  argTypes: {
    snapPoints: {
      control: { type: 'object' }
    },
    align: {
      options: ['flex-end', 'stretch'],
      control: { type: 'select' }
    },
    maxWidth: {
      defaultValue: '100%',
      control: { type: 'text' }
    },
    hideBackdrop: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    snapPoints: [
      {
        point: '60vh',
        dragThresholds: { up: '15vh', down: '15vh' },
        activeWhen: { screen: { minHeight: 400 }, paperOverflow: true }
      },
      { point: '100vh', dragThresholds: { up: '0px', down: '15vh' } }
    ],
    align: 'flex-end'
  }
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={onOpen}>
          {getOpenButtonText(context)}
        </Button>
        <BottomSheet {...args} open={isOpen} onClose={onClose}>
          <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
          <DialogContent>
            <Typography variant="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </Typography>
          </DialogContent>
          <DialogActions sticky>
            <Button fullWidth color="monoA" size="40" variant="outlined" onClick={onClose}>
              {getCancelButtonText(context)}
            </Button>
            <Button fullWidth color="primary" size="40" variant="contained">
              {getCreateButtonText(context)}
            </Button>
          </DialogActions>
        </BottomSheet>
      </>
    );
  }
};
