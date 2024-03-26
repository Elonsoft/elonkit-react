import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Rating } from '.';

const meta: Meta<typeof Rating> = {
  tags: ['autodocs'],
  component: Rating,
  parameters: {
    references: ['Rating']
  },
  argTypes: {
    IconContainerComponent: {
      table: {
        disable: true
      }
    },
    getLabelText: {
      table: {
        disable: true
      }
    },
    emptyLabelText: {
      table: {
        disable: true
      }
    },
    decimal: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    emptyIcon: {
      table: {
        disable: true
      }
    },
    label: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    precision: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    visuallyHidden: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Demo: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<number | null>(3);
    return (
      <Box sx={{ maxWidth: '300px', padding: '16px', display: 'flex', alignItems: 'center' }}>
        <Rating
          {...args}
          name="feedback"
          precision={0.5}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        />
        {value !== null && <Box sx={{ ml: 2, color: 'monoA.A900', font: 'caption' }}>{value}</Box>}
      </Box>
    );
  }
};
