import { useState } from '@storybook/addons';

import { Autocomplete, AutocompleteFooter, AutocompleteSearch } from '.';

import { AutocompleteOptions } from '..';

interface User {
  id: number;
  name: string;
}

const USERS = [
  {
    id: 1,
    name: 'Joe Galt'
  },
  {
    id: 2,
    name: 'Joe  Pepe'
  },
  {
    id: 3,
    name: 'Joe Joe'
  },
  {
    id: 4,
    name: 'Joe Doe'
  },
  {
    id: 5,
    name: 'Spider Man'
  },
  {
    id: 6,
    name: 'Batman'
  },
  {
    id: 7,
    name: 'Bill Gates'
  },
  {
    id: 8,
    name: 'Name Name'
  },
  {
    id: 9,
    name: 'Bill Bill'
  },
  {
    id: 10,
    name: 'Bill PC Master'
  },
  {
    id: 11,
    name: 'Not Sure'
  }
];

const getUsers = (search: string) => {
  return new Promise<User[]>((resolve) => {
    resolve(USERS.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())) as User[]);
  });
};

const getUserValue = (user: User) => user.id;
const getUserLabel = (user: User) => user.name;

export const Demo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const onChange = (user: User) => {
    setUser(user);
  };

  const onChangeUsers = (users: User[]) => {
    setUsers(users);
  };

  return (
    <>
      {!!user && <div>{getUserLabel(user)}</div>}
      <br />
      <br />
      <Autocomplete<User>
        value={user}
        onChange={onChange}
        getOptions={getUsers}
        getOptionValue={getUserValue}
        getOptionLabel={getUserLabel}
      >
        <AutocompleteSearch />
        <AutocompleteOptions />
        <AutocompleteFooter />
      </Autocomplete>

      <br />
      <br />

      <h6>multiple</h6>

      {<div>{users.map((user) => getUserLabel(user)).join(', ')}</div>}
      <br />
      <br />
      <Autocomplete<User>
        value={users}
        multiple
        onChange={onChangeUsers}
        getOptions={getUsers}
        getOptionValue={getUserValue}
        getOptionLabel={getUserLabel}
      >
        <AutocompleteSearch />
        <AutocompleteOptions />
        <AutocompleteFooter />
      </Autocomplete>
    </>
  );
};
