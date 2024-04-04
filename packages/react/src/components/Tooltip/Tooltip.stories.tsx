import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import { Tooltip } from '.';

type Args = ComponentProps<typeof Tooltip>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Tooltip,
  parameters: {
    references: ['Tooltip']
  },
  argTypes: {
    title: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    components: {
      table: {
        disable: true
      }
    },
    componentsProps: {
      table: {
        disable: true
      }
    },
    describeChild: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    },
    PopperComponent: {
      table: {
        disable: true
      }
    },
    PopperProps: {
      table: {
        disable: true
      }
    },
    slots: {
      table: {
        disable: true
      }
    },
    slotProps: {
      table: {
        disable: true
      }
    },
    TransitionComponent: {
      table: {
        disable: true
      }
    },
    TransitionProps: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    const isCustomColor = args.color === 'monoB' || args.color === 'monoBA600' || args.color === 'whiteA600';

    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!isOpen);
    };

    return (
      <Box
        sx={(theme) => ({
          width: '100%',
          height: 200,
          backgroundColor: isCustomColor ? theme.palette.monoA.A100 : theme.palette.surface.background,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        })}
      >
        <Tooltip
          {...args}
          open={args.open === undefined ? isOpen : args.open}
          title={locale === 'en' ? 'Tooltip' : 'Подсказка'}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Button variant="contained" onClick={handleToggle}>
            {locale === 'en' ? 'Button' : 'Кнопка'}
          </Button>
        </Tooltip>
      </Box>
    );
  }
};
