import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormControl, FormLabel } from '@mui/material';
import { FormControlLabel } from '@mui/material';

import { RadioGroup } from './RadioGroup';

import { Radio } from '../Radio';

type Args = ComponentProps<typeof RadioGroup>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: RadioGroup,
  parameters: {
    references: ['RadioGroup']
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          {...args}
        >
          <FormControlLabel control={<Radio />} label="Female" value="female" />
          <FormControlLabel control={<Radio />} label="Male" value="male" />
          <FormControlLabel control={<Radio />} label="Other" value="other" />
        </RadioGroup>
      </FormControl>
    );
  }
};
