import { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

import { IconAt } from '../../icons';
import { Avatar } from '../Avatar';

const ICON_SIZE_MAP = {
  '100': 20,
  '200': 24,
  '300': 32,
};

const meta: Meta<typeof Chip> = {
  tags: ['autodocs'],
  component: Chip,
  parameters: {
    references: ['Chip'],
  },
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const size = ICON_SIZE_MAP[args.size || '100'];

    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Chip component="button" {...args}>
          {locale === 'ru' ? 'Иванов Иван Иванович' : 'John Doe'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: size, height: size }} variant="circle" />}
          onDelete={() => {}}
          {...args}
        >
          {locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: size, height: size }} variant="circle" />}
          {...args}
        >
          {locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip component="button" startIcon={<IconAt size={`${size}px`} />} {...args}>
          {locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
      </div>
    );
  },
};
