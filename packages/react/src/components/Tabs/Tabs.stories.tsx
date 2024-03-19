import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

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

const tabsData = {
  en: [
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
  ],
  ru: [
    'Первый',
    'Второй',
    'Третий',
    'Четвертый',
    'Пятый',
    'Шестой',
    'Седьмой',
    'Восьмой',
    'Девятый',
    'Десятый',
    'Одиннадцатый',
    'Двенадцатый'
  ]
};

export const Demo: Story = {
  render: (args, context) => {
    const [value, setValue] = useState(0);
    const [tabsWidth, setTabsWidth] = useState(0);
    const tabRefs = useRef<Array<HTMLButtonElement | undefined>>([]);
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const gap = 4;

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
      const newTabsWidth =
        tabRefs.current.reduce((acc, tabRef) => {
          return acc + (tabRef ? tabRef.scrollWidth : 0);
        }, 0) + (args.rounded ? gap * (tabsData[locale].length - 1) : 0);

      setTabsWidth(newTabsWidth);
    }, [tabRefs, args.rounded, locale]);

    return (
      <Box
        sx={{
          width: args.orientation === 'vertical' ? '50%' : '100%'
        }}
      >
        <Box>
          <Tabs
            {...args}
            sx={{
              [`.${tabsClasses.flexContainer}`]: {
                gap: args.rounded ? `${gap}px` : 0,
                borderBottom: args.orientation === 'vertical' ? undefined : 1,
                borderColor: args.orientation === 'vertical' ? undefined : 'divider',
                width: args.orientation === 'vertical' ? undefined : tabsWidth,
                height: args.orientation === 'vertical' ? '200px' : undefined
              }
            }}
            value={value}
            onChange={handleChange}
          >
            {(locale === 'en' ? tabsData.en : tabsData.ru).map((label, index) => (
              <Tab
                key={index}
                ref={(el) => {
                  tabRefs.current[index] = el || undefined;
                }}
                endIcon={<IconAt size="20px" />}
                label={label}
                startIcon={<IconAt size="20px" />}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    );
  }
};
