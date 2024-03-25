import { SyntheticEvent, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useTheme } from '@mui/material';

import { Tab, tabClasses, Tabs, tabsClasses } from '.';

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
    TabIndicatorSlidingAnimation: {
      control: 'select',
      options: ['expandFromCenter']
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

const gap = 4;

export const Demo: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState(0);

    const tabRefs = useRef<Array<HTMLButtonElement | undefined>>([]);
    const theme = useTheme();

    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs
        {...args}
        sx={{
          [`.${tabsClasses.flexContainer}`]: {
            gap: `${gap}px`
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
            endIcon={<IconAt size="24px" />}
            label={label}
            startIcon={<IconAt size="24px" />}
            sx={{
              [`.${tabClasses.iconWrapper}`]: {
                color: theme.palette.monoA.A600
              },
              [`&.${tabClasses.selected} .${tabClasses.iconWrapper}`]: {
                color: theme.palette.monoA.A800
              }
            }}
          />
        ))}
      </Tabs>
    );
  }
};
