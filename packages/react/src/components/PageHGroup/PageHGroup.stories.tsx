import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';

import {
  PageHGroup,
  PageHGroupActions,
  PageHGroupBreadcrumbs,
  PageHGroupHeading,
  PageHGroupMain,
  PageHGroupStatus
} from '.';

import { IconDotsHorizontalW500, IconInformation2W400, IconPlusW400 } from '../../icons';
import { DemoBase as BreadcrumbsDemo } from '../Breadcrumbs/Breadcrumbs.stories';

type Args = ComponentProps<typeof PageHGroup> & ComponentProps<typeof PageHGroupHeading>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: PageHGroup,
  parameters: {
    references: [
      'PageHGroup',
      'PageHGroupActions',
      'PageHGroupBreadcrumbs',
      'PageHGroupHeading',
      'PageHGroupMain',
      'PageHGroupStatus'
    ]
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        category: 'PageHGroupHeading'
      }
    },
    maxLines: {
      control: { type: 'number' },
      table: {
        category: 'PageHGroupHeading'
      }
    },
    endAdornment: {
      table: {
        category: 'PageHGroupHeading'
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <PageHGroup>
        <PageHGroupBreadcrumbs>{BreadcrumbsDemo.render?.({}, context)}</PageHGroupBreadcrumbs>
        <PageHGroupMain>
          <PageHGroupHeading endAdornment={<IconInformation2W400 />} maxLines={args.maxLines}>
            {args.children || (locale === 'en' ? 'Schedule' : 'Расписание')}
          </PageHGroupHeading>
          <PageHGroupActions>
            <Button color="primary" startIcon={<IconPlusW400 />} variant="contained">
              {locale === 'en' ? 'Create' : 'Создать'}
            </Button>
            <Button color="tertiary" variant="outlined">
              <IconDotsHorizontalW500 />
            </Button>
          </PageHGroupActions>
        </PageHGroupMain>
        <PageHGroupStatus>{locale === 'en' ? 'Link access enabled' : 'Доступ по ссылке включен'}</PageHGroupStatus>
      </PageHGroup>
    );
  }
};
