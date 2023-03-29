import { useState } from 'react';

import { SFSSortingValue } from './SFSSorting/SFSSorting.types';

import { Args, Story } from '@storybook/react';

import Divider from '@mui/material/Divider';

import { SFSChips } from './SFSChips';

import { IconClose } from '../../icons';
import { Chip } from '../Chip';
import { SFS, SFSRow, SFSSearch, SFSSorting } from '..';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySaledStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount' },
  { label: 'Square', value: 'bySquare' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySaledStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' }
];

const chipsRu = [
  { id: '1', name: 'Весь отдел', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '2', name: 'В наличии', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '3', name: 'Встреча', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '4', name: '11 авг – 12 сен 2020', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '5', name: 'Наличные', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '6', name: 'Ростов-на-Дону', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '7', name: 'Встреча', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '8', name: '11 авг – 12 сен 2020', deleteIcon: <IconClose />, onDelete: () => null }
];

const chipsEn = [
  { id: '1', name: 'Whole department', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '2', name: 'In stock  ', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '3', name: 'Meeting', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '4', name: '11 Aug – 12 Sep 2020', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '5', name: 'Cash', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '6', name: 'Rostov-on-Don', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '7', name: 'Meeting', deleteIcon: <IconClose />, onDelete: () => null },
  { id: '8', name: '11 Aug – 12 Sep 2020', deleteIcon: <IconClose />, onDelete: () => null }
];

export const Demo: Story<Args> = (args, { globals: { locale } }) => {
  const [search, setSearch] = useState('');

  const [value, setValue] = useState<SFSSortingValue | null>(null);
  const [values, setValues] = useState<SFSSortingValue[]>([]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.currentTarget.value);
  };

  const onClearSearch = () => {
    setSearch('');
  };

  return (
    <SFS>
      <SFSRow>
        <SFSSearch onChange={onSearchChange} onClear={search ? onClearSearch : undefined} value={search} />
        {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
        {args.SFSSortingMultiple ? (
          <SFSSorting
            key="1"
            multiple
            value={values}
            onChange={setValues}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        ) : (
          <SFSSorting
            key="2"
            value={value}
            onChange={setValue}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        )}
      </SFSRow>
      <SFSChips>
        {locale == 'ru'
          ? chipsRu.map((item) => <Chip size="small" key={item.id} label={item.name} {...item} />)
          : chipsEn.map((item) => <Chip size="small" key={item.id} label={item.name} {...item} />)}
      </SFSChips>
    </SFS>
  );
};
