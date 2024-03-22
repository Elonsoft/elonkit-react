import { useEffect, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { AutocompleteField, AutocompleteFieldProps } from '.';

import { AutocompleteMenuFooter, AutocompleteMenuHeader } from '../AutocompleteMenu';

interface User {
  id: number;
  name: string;
}

const USERS: { en: User[]; ru: User[] } = {
  en: [],
  ru: []
};

for (let i = 0; i < 25; i++) {
  USERS.en.push({
    id: i + 1,
    name: `John Doe ${i + 1}`
  });

  USERS.ru.push({
    id: i + 1,
    name: `Иванов Иван ${i + 1}`
  });
}

const getUserValue = (user: User) => user.id;
const getUserLabel = (user: User) => user.name;
const getUserLabelReactNode = (user: User) => <i>{user.name}</i>;
const getUsersDisplayValue = (users: User[]) => (
  <span>
    {users.map((user, index) => (
      <>
        <i key={user.id}>{user.name}</i>
        {index < users.length - 1 && ', '}
      </>
    ))}
  </span>
);

const meta: Meta<typeof AutocompleteField> = {
  tags: ['autodocs'],
  component: AutocompleteField,
  parameters: {
    references: ['Autocomplete', 'AutocompleteField']
  },
  argTypes: {
    multiple: {
      control: { type: 'boolean' }
    },
    inlineSearch: {
      control: { type: 'boolean' }
    },
    closeAfterSelect: {
      control: { type: 'boolean' }
    },
    header: {
      control: {
        type: 'text'
      }
    },
    footer: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'boolean' }
    },
    size: {
      options: ['56', '48', '40', '32'],
      control: { type: 'select' }
    },
    helperText: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    InputProps: {
      table: {
        disable: true
      }
    },
    InputLabelProps: {
      table: {
        disable: true
      }
    },
    FormHelperTextProps: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    getDisplayValue: {
      table: {
        disable: true
      }
    },
    getOptionDisabled: {
      table: {
        disable: true
      }
    },
    getOptionLabel: {
      table: {
        disable: true
      }
    },
    getOptionValue: {
      table: {
        disable: true
      }
    },
    loading: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof AutocompleteField>;

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    const [options, setOptions] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');

    const onChange = (user: User | null) => {
      setUser(user);

      if (args.inlineSearch && user) {
        setSearch(user.name);
      }
    };

    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };

    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
      setSearch('');
      setLoading(false);
    }, [locale]);

    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      setLoading(true);

      timeout.current = setTimeout(() => {
        setOptions(USERS[locale as 'en' | 'ru'].filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
        setLoading(false);
      }, 1000);

      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
      };
    }, [search]);

    const props: Pick<
      AutocompleteFieldProps<any>,
      | 'closeAfterSelect'
      | 'disabled'
      | 'error'
      | 'inlineSearch'
      | 'header'
      | 'footer'
      | 'fullWidth'
      | 'getOptionLabel'
      | 'getOptionValue'
      | 'helperText'
      | 'loading'
      | 'options'
      | 'placeholder'
      | 'required'
      | 'size'
      | 'InputProps'
      | 'onBlur'
    > = {
      closeAfterSelect: args.closeAfterSelect,
      disabled: args.disabled,
      error: args.error,
      header: args.header && <AutocompleteMenuHeader>{args.header}</AutocompleteMenuHeader>,
      footer: args.footer && <AutocompleteMenuFooter>{args.footer}</AutocompleteMenuFooter>,
      fullWidth: true,
      inlineSearch: args.inlineSearch,
      getOptionLabel: getUserLabel,
      getOptionValue: getUserValue,
      helperText: args.helperText,
      loading,
      options,
      placeholder: args.placeholder,
      required: args.required,
      size: args.size,
      InputProps: {
        SearchProps: {
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      },
      onBlur: args.onBlur
    };

    return (
      <Box sx={{ maxWidth: '500px' }}>
        {args.multiple ? (
          <AutocompleteField
            multiple
            label={locale === 'en' ? 'Users' : 'Пользователи'}
            value={users}
            onChange={onChangeUsers}
            {...props}
          />
        ) : (
          <AutocompleteField
            label={locale === 'en' ? 'Users' : 'Пользователи'}
            value={user}
            onChange={onChange}
            {...props}
          />
        )}
      </Box>
    );
  }
};

/** We can group the options with the `groupBy` prop. Make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers. */
export const Groups: Story = {
  render: function Render(_args, { globals: { locale } }) {
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
  }
};

export const Customization: Story = {
  render: function Render(_args, { globals: { locale } }) {
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
          getDisplayValue={getUsersDisplayValue}
          getOptionLabel={getUserLabelReactNode}
          getOptionValue={getUserValue}
          label={locale === 'en' ? 'Users' : 'Пользователи'}
          options={options}
          value={users}
          onChange={onChangeUsers}
        />
      </Box>
    );
  }
};
