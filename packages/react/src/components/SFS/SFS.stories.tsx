import { ComponentProps, useState } from 'react';

import { SFSSortingValue } from './SFSSorting/SFSSorting.types';

import { Meta, StoryObj } from '@storybook/react';

import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import { SFS, SFSFilters, SFSFiltersGroup, SFSRow, SFSSearch, SFSSorting } from '..';

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

type Args = ComponentProps<typeof SFS> & { SFSSortingMultiple?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: SFS,
  parameters: {
    references: ['SFS', 'SFSFilters', 'SFSFiltersGroup', 'SFSRow', 'SFSSearch', 'SFSSorting']
  },
  argTypes: {
    SFSSortingMultiple: {
      name: 'SFSSorting.multiple',
      description: 'If `true`, multiple options can be selected.',
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    const [search, setSearch] = useState('');

    const [value, setValue] = useState<SFSSortingValue | null>(null);
    const [values, setValues] = useState<SFSSortingValue[]>([]);
    const [filters, setFilters] = useState<Record<string, any>>({
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': ''
    });

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.currentTarget.value);
    };

    const onClearSearch = () => {
      setSearch('');
    };

    const onFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
      <SFS>
        <SFSRow>
          <SFSSearch value={search} onChange={onSearchChange} onClear={search ? onClearSearch : undefined} />
          {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
          {args.SFSSortingMultiple ? (
            <SFSSorting
              key="1"
              multiple
              options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
              value={values}
              onChange={setValues}
            />
          ) : (
            <SFSSorting
              key="2"
              options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
              value={value}
              onChange={setValue}
            />
          )}
          <Divider orientation="vertical" />
          <SFSFilters
            count={Object.values(filters).filter(Boolean).length}
            onReset={() =>
              setFilters({
                '1': '',
                '2': '',
                '3': '',
                '4': '',
                '5': '',
                '6': ''
              })
            }
          >
            <SFSFiltersGroup title={locale === 'ru' ? 'Основное' : 'General'}>
              <TextField
                label={locale === 'ru' ? 'Ответственный' : 'Responsible'}
                name="1"
                size="48"
                value={filters['1']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Создатель' : 'Author'}
                name="2"
                size="48"
                value={filters['2']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Статус задачи' : 'Task status'}
                name="3"
                size="48"
                value={filters['3']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Этап выполнения' : 'Execution stage'}
                name="4"
                size="48"
                value={filters['4']}
                onChange={onFiltersChange}
              />
            </SFSFiltersGroup>
            <SFSFiltersGroup title={locale === 'ru' ? 'Другое' : 'Other'}>
              <TextField
                label={locale === 'ru' ? 'Срок выполнения' : 'Deadline'}
                name="5"
                size="48"
                value={filters['5']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Закрытие' : 'Closure'}
                name="6"
                size="48"
                value={filters['6']}
                onChange={onFiltersChange}
              />
            </SFSFiltersGroup>
          </SFSFilters>
        </SFSRow>
      </SFS>
    );
  }
};
