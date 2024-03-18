import { ReactNode, SyntheticEvent, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Tab, Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  tags: ['autodocs'],
  component: Tabs,
  parameters: {
    references: ['Tabs', 'Tab', 'TabScrollButton']
  },
  argTypes: {
    action: {
      table: {
        disable: true
      }
    },
    'aria-label': {
      table: {
        disable: true
      }
    },
    'aria-labelledby': {
      table: {
        disable: true
      }
    },
    centered: {
      options: [false, true],
      control: 'boolean'
    },
    children: {
      table: {
        disable: true
      }
    },
    component: {
      table: {
        disable: true
      }
    },
    ScrollButtonComponent: {
      table: {
        disable: true
      }
    },
    scrollButtons: {
      control: 'radio',
      options: ['auto', true, false]
    },
    slots: {
      table: {
        disable: true
      }
    },
    TabIndicatorProps: {
      table: {
        disable: true
      }
    },
    TabScrollButtonProps: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const tabsData = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth'
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Demo: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs {...args} value={value} onChange={handleChange}>
            {tabsData.map((label, index) => (
              <Tab key={index} label={label} />
            ))}
          </Tabs>
        </Box>

        {tabsData.map((content, index) => (
          <CustomTabPanel key={index} index={index} value={value}>
            {content}
          </CustomTabPanel>
        ))}
      </Box>
    );
  }
};

/** We can use `variant` prop on each Tab component to make the tabs smaller and have rounded corners. */
export const Rounded: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs {...args} value={value} onChange={handleChange}>
            {tabsData.slice(0, 3).map((label, index) => (
              <Tab key={index} label={label} variant="rounded" />
            ))}
          </Tabs>
        </Box>

        {tabsData.map((content, index) => (
          <CustomTabPanel key={index} index={index} value={value}>
            {content}
          </CustomTabPanel>
        ))}
      </Box>
    );
  }
};
