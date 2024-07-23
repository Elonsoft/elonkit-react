/* eslint-disable react-hooks/rules-of-hooks */
import { DragEvent, useState } from 'react';

import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { DropzoneCompact } from '.';

import { Button } from '../Button';

const getText = (args: Args, context: StoryContext<unknown>) => {
  return args.children || (context.globals.locale === 'en' ? 'Drag over this area' : 'Переместите в эту область');
};

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Drag this button' : 'Переместите кнопку';
};

const meta: Meta<typeof DropzoneCompact> = {
  tags: ['autodocs'],
  component: DropzoneCompact,
  parameters: {
    references: ['DropzoneCompact'],
  },
  argTypes: {
    isDragOver: {
      table: {
        disable: true,
      },
    },
    TransitionProps: {
      table: {
        disable: true,
      },
    },
    isDragging: {
      table: {
        disable: true,
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropzoneCompact>;

export const Demo: Story = {
  render: (args, context) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [isDragging, setDragging] = useState(false);

    const onDragStart = (e: DragEvent) => {
      setDragging(true);
      e.dataTransfer.setData('text/plain', 'dragging');
    };

    const onDragEnd = () => {
      setDragging(false);
    };

    const onDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const onDragLeave = () => {
      setIsDragOver(false);
    };

    const onDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    return (
      <Box display="flex" flexDirection="column" gap="20px">
        <Button
          disableTouchRipple
          draggable
          color="primary"
          sx={{ width: '150px' }}
          variant="contained"
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
        >
          {getButtonText(context)}
        </Button>
        <Box onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}>
          <DropzoneCompact {...args} isDragOver={isDragOver} isDragging={isDragging}>
            {getText(args, context)}
          </DropzoneCompact>
        </Box>
      </Box>
    );
  },
};
