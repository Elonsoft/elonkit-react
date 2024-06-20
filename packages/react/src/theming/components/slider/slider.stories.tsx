import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import Slider, { SliderProps } from '@mui/material/Slider';

const MARKS = [{ value: 0 }, { value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }];

type Args = Pick<SliderProps, 'color' | 'valueLabelDisplay' | 'disabled'> & { height: number };

const meta: Meta<Args> = {
  title: 'Overrides/Slider',

  parameters: {
    viewMode: 'canvas',
  },

  argTypes: {
    color: {
      options: ['primary', 'secondary'],

      control: {
        type: 'select',
      },
    },

    valueLabelDisplay: {
      options: ['off', 'on', 'auto'],

      control: {
        type: 'select',
      },

      defaultValue: 'auto',
    },

    disabled: {
      control: {
        type: 'boolean',
      },
    },

    height: {
      control: {
        type: 'range',
        min: 2,
        max: 8,
        step: 1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

const DemoWrapper = ({ height, ...args }: Args) => {
  const [value, setValue] = useState<number[]>([20, 60]);

  const onChange = (_event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const styleHorizontal = { height: `${height}px` };
  const styleVertical = { height: '100%', width: `${height}px` };

  return (
    <div style={{ display: 'grid', gap: '24px', gridAutoFlow: 'row', maxWidth: '400px', paddingTop: '16px' }}>
      <Slider max={100} min={0} style={styleHorizontal} {...args} />
      <Slider marks={MARKS} max={50} min={0} step={null} style={styleHorizontal} {...args} />
      <Slider max={100} min={0} style={styleHorizontal} value={value} onChange={onChange} {...args} />
      <div
        style={{
          display: 'grid',
          gap: '24px',
          gridAutoFlow: 'column',
          justifyContent: 'flex-start',
          height: '150px',
        }}
      >
        <Slider max={100} min={0} orientation="vertical" style={styleVertical} {...args} />
        <Slider marks={MARKS} max={50} min={0} orientation="vertical" step={null} style={styleVertical} {...args} />
        <Slider
          max={100}
          min={0}
          orientation="vertical"
          style={styleVertical}
          value={value}
          onChange={onChange}
          {...args}
        />
      </div>
    </div>
  );
};

export const Demo: Story = {
  render: function Render(args) {
    return <DemoWrapper {...args} />;
  },
};
