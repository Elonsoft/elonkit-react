import { useState } from 'react';

import { SFSSortingValue } from '../SFS/SFSSorting/SFSSorting.types';

import { Args, Story } from '@storybook/react';

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

export const Demo: Story<Args> = (args, { globals: { locale } }) => {
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
};
