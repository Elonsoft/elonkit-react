import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';

import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem';

import { IconCheckW500 } from '../../icons';

const TIMELINE = {
  en: [
    {
      name: 'Home',
      oppositeContent: '112:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Catalog',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Electronics',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Tablets',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Apple',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet'
    }
  ],
  ru: [
    {
      name: 'Главная страница',
      oppositeContent: '112:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Каталог',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Электроника',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Планшеты',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Apple',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet'
    }
  ]
};

type Args = ComponentProps<typeof Timeline> & ComponentProps<typeof TimelineItem>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Timeline,
  parameters: {
    references: ['Timeline', 'TimelineItem']
  },
  argTypes: {
    children: {
      table: {
        category: 'TimelineItem'
      }
    },
    icon: {
      table: {
        category: 'TimelineItem'
      }
    },
    header: {
      table: {
        category: 'TimelineItem'
      }
    },
    oppositeContent: {
      table: {
        category: 'TimelineItem'
      }
    },
    weight: {
      options: ['xs', 'sm'],
      control: { type: 'select' },
      table: {
        category: 'TimelineItem'
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (_args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Timeline>
        <TimelineItem oppositeContent={'today'} weight={'sm'}>
          <Divider />
        </TimelineItem>
        {TIMELINE[locale].map((item, index) => (
          <TimelineItem
            key={item.name}
            header={item.name}
            icon={
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  borderRadius: '50%',
                  padding: '8px',
                  background: theme.palette.blue[300],
                  color: theme.palette.monoB[500]
                })}
              >
                <IconCheckW500 />
              </Box>
            }
            oppositeContent={item.oppositeContent}
            weight={index === 0 ? 'sm' : 'xs'}
          >
            {item.text}
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
};
