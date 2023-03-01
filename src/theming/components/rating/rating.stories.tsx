import { useState } from 'react';

import { Story } from '@storybook/react';

import Rating from '@mui/material/Rating';

export const Demo: Story = ({ ...args }) => {
  const [value, setValue] = useState<number | null>(3);

  return <Rating value={value} onChange={(e, newValue) => setValue(newValue)} {...args} />;
};
