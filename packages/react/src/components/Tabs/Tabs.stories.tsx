import { ReactNode, SyntheticEvent, useEffect, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Tab, Tabs, tabsClasses } from '.';

import { IconAt } from '../../icons';

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
    const [tabsWidth, setTabsWidth] = useState(0);
    const tabRefs = useRef<Array<HTMLButtonElement | undefined>>([]);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
      const newTabsWidth = tabRefs.current.reduce((acc, tabRef) => {
        return acc + (tabRef ? tabRef.scrollWidth : 0);
      }, 0);

      setTabsWidth(newTabsWidth);
    }, [tabRefs]);

    return (
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            {...args}
            sx={{
              [`.${tabsClasses.flexContainer}`]: {
                borderBottom: 1,
                borderColor: 'divider',
                width: tabsWidth
              }
            }}
            value={value}
            onChange={handleChange}
          >
            {tabsData.map((label, index) => (
              <Tab
                key={index}
                ref={(el) => {
                  tabRefs.current[index] = el || undefined;
                }}
                endIcon={<IconAt size="20" />}
                label={label}
                startIcon={<IconAt size="20" />}
              />
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
