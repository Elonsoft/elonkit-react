import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TabBar, TabBarItem } from '.';

import { IconAt } from '../../icons';

const meta: Meta<typeof TabBar> = {
  tags: ['autodocs'],
  component: TabBar,
  parameters: {
    references: ['TabBar', 'TabBarItem']
  }
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const Demo: Story = {
  render: function Render(_args, { globals: { locale } }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';

    return (
      <TabBar
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1
        }}
      >
        <TabBarItem aria-label={label} icon={<IconAt />} selected={index === 0} onClick={() => setIndex(0)} />
        <TabBarItem aria-label={label} icon={<IconAt />} selected={index === 1} onClick={() => setIndex(1)} />
        <TabBarItem aria-label={label} icon={<IconAt />} selected={index === 2} onClick={() => setIndex(2)} />
      </TabBar>
    );
  }
};

/** We can use `label` prop to add labels to `TabBarItem`. */
export const WithLabels: Story = {
  render: function Render(_args, { globals: { locale } }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';

    return (
      <TabBar
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1
        }}
      >
        <TabBarItem icon={<IconAt />} label={label} selected={index === 0} onClick={() => setIndex(0)} />
        <TabBarItem icon={<IconAt />} label={label} selected={index === 1} onClick={() => setIndex(1)} />
        <TabBarItem icon={<IconAt />} label={label} selected={index === 2} onClick={() => setIndex(2)} />
      </TabBar>
    );
  }
};
