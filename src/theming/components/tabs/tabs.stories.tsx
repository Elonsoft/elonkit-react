import { useState } from 'react';

import { Story } from '@storybook/react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const Demo: Story = (args) => {
  const [value, setValue] = useState('one');

  const onChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue as string);
  };

  return (
    <div>
      <Tabs value={value} aria-label="Tabs" onChange={onChange} {...args}>
        <Tab value="one" label="item one" {...args} />
        <Tab value="two" label="item two" {...args} />
        <Tab value="three" label="item three" {...args} />
        <Tab value="four" label="item four" {...args} />
        <Tab value="five" label="item five" {...args} />
      </Tabs>
    </div>
  );
};
