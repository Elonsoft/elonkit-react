import { ComponentProps, useState } from 'react';

import { SFSSortingValue } from '../SFS/SFSSorting/SFSSorting.types';

import { Meta, StoryObj } from '@storybook/react';

import { SFSSorting, SortingMenu } from '..';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySalesStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount' },
  { label: 'Square', value: 'bySquare' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySalesStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' }
];

type Args = ComponentProps<typeof SortingMenu> & { SFSSortingMultiple?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: SortingMenu,
  parameters: {
    references: ['FSSorting', 'SortingMenu']
  },
  argTypes: {
    SFSSortingMultiple: {
      name: 'SFSSorting.multiple',
      description: 'If `true`, multiple options can be selected.',
      control: { type: 'boolean' }
    },
    values: {
      table: {
        disable: true
      }
    },
    classes: {
      table: {
        disable: true
      }
    },
    valuesMap: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    },
    menuAnchor: {
      table: {
        disable: true
      }
    },
    onMenuClose: {
      table: {
        disable: true
      }
    },
    menuListRef: {
      table: {
        disable: true
      }
    },
    sortMap: {
      table: {
        disable: true
      }
    },
    iconItemAsc: {
      table: {
        disable: true
      }
    },
    iconItemDesc: {
      table: {
        disable: true
      }
    },
    multiple: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, { globals: { locale } }) => {
    const [value, setValue] = useState<SFSSortingValue | null>(null);
    const [values, setValues] = useState<SFSSortingValue[]>([]);

    return (
      <>
        {args.SFSSortingMultiple ? (
          <SFSSorting
            key="1"
            multiple
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
            value={values}
            onChange={setValues}
          >
            <SortingMenu />
          </SFSSorting>
        ) : (
          <SFSSorting
            key="2"
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
            value={value}
            onChange={setValue}
          >
            <SortingMenu {...args} />
          </SFSSorting>
        )}
      </>
    );
  }
};
