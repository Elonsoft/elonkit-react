import { Meta, StoryObj } from '@storybook/react';

import { ChipList } from './ChipList';

import { IconAt } from '../../icons';
import { Avatar } from '../Avatar';
import { Chip } from '../Chip';

const meta: Meta<typeof ChipList> = {
  tags: ['autodocs'],
  component: ChipList,
  parameters: {
    references: ['ChipList'],
  },
  argTypes: {
    maxLines: {
      type: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipList>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <ChipList key={args.maxLines} sx={{ width: '500px' }} {...args}>
        <Chip component="button" {...args}>
          {context.locale === 'ru' ? 'Иванов Иван Иванович' : 'John Doe'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          onDelete={() => {}}
          {...args}
        >
          {context.locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          {...args}
        >
          {context.locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip
          component="button"
          startIcon={<IconAt size="24px" sx={(theme) => ({ color: theme.vars.palette.monoA.A500 })} />}
          {...args}
        >
          {context.locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
        <Chip component="button" {...args}>
          {context.locale === 'ru' ? 'Иванов Иван Иванович' : 'John Doe'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          onDelete={() => {}}
          {...args}
        >
          {context.locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          {...args}
        >
          {context.locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip
          component="button"
          startIcon={<IconAt size="24px" sx={(theme) => ({ color: theme.vars.palette.monoA.A500 })} />}
          {...args}
        >
          {context.locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
        <Chip component="button" {...args}>
          {context.locale === 'ru' ? 'Иванов Иван Иванович' : 'John Doe'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          onDelete={() => {}}
          {...args}
        >
          {context.locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
        </Chip>
        <Chip
          component="button"
          startIcon={<Avatar src="./avatar/6.png" sx={{ width: '20px', height: '20px' }} variant="circle" />}
          {...args}
        >
          {context.locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip
          component="button"
          startIcon={<IconAt size="24px" sx={(theme) => ({ color: theme.vars.palette.monoA.A500 })} />}
          {...args}
        >
          {context.locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
      </ChipList>
    );
  },
};
