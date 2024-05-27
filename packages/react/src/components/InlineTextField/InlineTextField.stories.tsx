import { Meta, StoryObj } from '@storybook/react';

import { InlineTextField } from '.';

const meta: Meta<typeof InlineTextField> = {
  tags: ['autodocs'],
  component: InlineTextField,
  parameters: {
    references: ['InlineTextField']
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'boolean' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'text' }
    },
    InputProps: {
      table: {
        disable: true
      }
    }
  },
  args: {
    value: 'Text'
  }
};

export default meta;
type Story = StoryObj<typeof InlineTextField>;

export const Demo: Story = {
  render: (args) => {
    return <InlineTextField {...args} />;
  }
};
