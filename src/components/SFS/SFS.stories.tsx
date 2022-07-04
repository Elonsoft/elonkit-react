import { useState } from 'react';

import { IDirection } from './SFSSorting/SFSSorting.types';

import { Args, Story } from '@storybook/react';

import { SFS, SFSDivider, SFSExpand, SFSFilter, SFSMore, SFSRow, SFSSearch, SFSSorting } from '..';

const sortingOptions = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySaledStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

export const Demo: Story<Args> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortingValue, setSortingValue] = useState<{ value: string; direction: IDirection }[]>();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onClearSearchText = () => {
    setSearchValue('');
  };

  return (
    <SFS>
      <SFSRow>
        <SFSSearch
          onChange={onSearchChange}
          onCloseButton={searchValue.length ? onClearSearchText : undefined}
          value={searchValue}
        />
        <SFSSorting value={sortingValue} onChange={setSortingValue} options={sortingOptions} />
        <SFSDivider />
        <SFSFilter>asdss</SFSFilter>
        <SFSDivider hideOnTabletXSBreakpoint />
        <SFSExpand />
        <SFSDivider />
        <SFSMore />
      </SFSRow>
    </SFS>
  );
};
