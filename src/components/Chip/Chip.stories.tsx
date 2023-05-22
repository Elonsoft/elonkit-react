import { Meta, StoryObj } from '@storybook/react';

import Avatar from '@mui/material/Avatar';

import { Chip } from './Chip';

import { IconAt } from '../../icons';

const ICON_SIZE_MAP = {
  '24': 20,
  '32': 24,
  '40': 32
};

const meta: Meta<typeof Chip> = {
  tags: ['autodocs'],
  component: Chip,
  parameters: {
    references: ['Chip']
  },
  argTypes: {
    component: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const size = ICON_SIZE_MAP[args.size || '24'];

    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Chip component="button" {...args}>
          Иванов Иван Иванович
        </Chip>
        <Chip component="button" {...args}>
          Петров Петр Петрович
        </Chip>
        <Chip component="button" startIcon={<Avatar sx={{ width: size, height: size }} />} {...args}>
          Петров Петр Петрович
        </Chip>
        <Chip component="button" startIcon={<IconAt size={`${size}px`} />} {...args}>
          Петров Петр Петрович
        </Chip>
      </div>
    );
  }
};
