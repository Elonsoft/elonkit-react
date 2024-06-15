import React, { ComponentProps, useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { ToggleButton, ToggleButtonGroup } from '.';

const value = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7'];

type Args = ComponentProps<typeof ToggleButtonGroup> & {
  exclusive?: boolean;
  orientation?: 'horizontal' | 'vertical';
  text?: string;
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: ToggleButtonGroup,
  parameters: {
    references: ['ToggleButton', 'ToggleButtonGroup'],
  },
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

const getText = (args: Args, context: StoryContext<unknown>) => {
  return args.text || (context.globals.locale === 'en' ? 'Text' : 'Текст');
};

const getValue = (args: Args) => {
  return args.exclusive;
};

export const Demo: Story = {
  render: function Render(args, context) {
    const [alignment, setAlignment] = useState<string>(value[0]);

    const handleAlignment = (event: React.MouseEvent, newAlignment: string) => {
      setAlignment(newAlignment);
    };

    const [formats, setFormats] = useState(() => [value[1], value[2]]);

    const handleFormat = (event: React.MouseEvent, newFormats: string[]) => {
      setFormats(newFormats);
    };

    return (
      <ToggleButtonGroup
        {...args}
        disabled={args.disabled}
        value={getValue(args) ? alignment : formats}
        onChange={getValue(args) ? handleAlignment : handleFormat}
      >
        <ToggleButton aria-label={value[0]} size={args.size} value={value[0]}>
          {getText(args, context)} 1
        </ToggleButton>
        <ToggleButton aria-label={value[1]} size={args.size} value={value[1]}>
          {getText(args, context)} 2
        </ToggleButton>
        <ToggleButton aria-label={value[2]} size={args.size} value={value[2]}>
          {getText(args, context)} 3
        </ToggleButton>
        <ToggleButton aria-label={value[3]} size={args.size} value={value[3]}>
          {getText(args, context)} 4
        </ToggleButton>
        <ToggleButton aria-label={value[4]} size={args.size} value={value[4]}>
          {getText(args, context)} 5
        </ToggleButton>
        <ToggleButton disabled aria-label={value[5]} size={args.size} value={value[5]}>
          {getText(args, context)} 6
        </ToggleButton>
        <ToggleButton disabled aria-label={value[6]} size={args.size} value={value[6]}>
          {getText(args, context)} 7
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
