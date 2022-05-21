import React, { useState } from 'react';

import { Story } from '@storybook/react';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import DatePicker from '@mui/lab/DatePicker';

import { InlineTextField } from '.';

import { FormatDate } from '../FormatDate';

export const Demo: Story = ({ ...args }) => {
  const [value, setValue] = useState('Hello World');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [value2, setValue2] = useState('100');

  const onChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  const [value3, setValue3] = useState('Value 1');

  const onChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(event.target.value);
  };

  const [value4, setValue4] = useState('Hello World');

  const onChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue4(event.target.value);
  };

  const [value5, setValue5] = useState<Date | null>(new Date());

  const onChange5 = (value: Date | null) => {
    setValue5(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
      <InlineTextField {...args} value={value}>
        <TextField variant="standard" value={value} onChange={onChange} />
      </InlineTextField>
      <InlineTextField {...args} value={value2}>
        <TextField variant="standard" value={value2} onChange={onChange2} type="number" />
      </InlineTextField>
      <InlineTextField {...args} value={value3}>
        <TextField variant="standard" value={value3} onChange={onChange3} select>
          <MenuItem value="Value 1">Value 1</MenuItem>
          <MenuItem value="Value 2">Value 2</MenuItem>
          <MenuItem value="Value 3">Value 3</MenuItem>
        </TextField>
      </InlineTextField>
      <InlineTextField {...args} value={value4}>
        <TextField variant="standard" value={value4} onChange={onChange4} multiline />
      </InlineTextField>
      <InlineTextField
        {...args}
        value={value5 ? <FormatDate format="fullDate">{value5.toISOString()}</FormatDate> : null}
      >
        <DatePicker
          value={value5}
          onChange={onChange5}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </InlineTextField>
    </div>
  );
};
