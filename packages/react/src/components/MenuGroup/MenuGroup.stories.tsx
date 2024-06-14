import { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { MenuGroup } from './MenuGroup';

import { AutocompleteField } from '../AutocompleteField';

interface User {
  id: number;
  name: string;
}

const USERS: { en: User[]; ru: User[] } = {
  en: [],
  ru: [],
};

for (let i = 0; i < 25; i++) {
  USERS.en.push({
    id: i + 1,
    name: `John Doe ${i + 1}`,
  });

  USERS.ru.push({
    id: i + 1,
    name: `Иванов Иван ${i + 1}`,
  });
}

const getUserValue = (user: User) => user.id;
const getUserLabel = (user: User) => user.name;

const meta: Meta<typeof MenuGroup> = {
  tags: ['autodocs'],
  component: MenuGroup,
  parameters: {
    references: ['MenuGroup'],
  },
};

export default meta;
type Story = StoryObj<typeof MenuGroup>;

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    const [options, setOptions] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };

    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
    }, [locale]);

    return (
      <Box sx={{ maxWidth: '500px' }}>
        <AutocompleteField<User>
          fullWidth
          multiple
          MenuGroupProps={args}
          getOptionLabel={getUserLabel}
          getOptionValue={getUserValue}
          groupBy={(user) => {
            const base = Math.floor(user.id / 10);
            return `${base * 10} - ${(base + 1) * 10 - 1}`;
          }}
          label={locale === 'en' ? 'Users' : 'Пользователи'}
          options={options}
          value={users}
          onChange={onChangeUsers}
        />
      </Box>
    );
  },
};
