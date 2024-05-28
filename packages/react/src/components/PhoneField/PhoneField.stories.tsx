import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PhoneField } from '.';

import { getCountries } from 'libphonenumber-js';

const meta: Meta<typeof PhoneField> = {
  tags: ['autodocs'],
  component: PhoneField,
  parameters: {
    references: ['PhoneField']
  },
  argTypes: {
    focused: {
      table: {
        disable: true
      }
    },
    hiddenLabel: {
      table: {
        disable: true
      }
    },
    margin: {
      table: {
        disable: true
      }
    },
    countries: {
      control: { type: 'select' }
    }
  },
  args: {
    countries: ['RU', 'KZ', 'US', 'GB', 'GE', 'VU']
  }
};

export default meta;
type Story = StoryObj<typeof PhoneField>;

export const Demo: Story = {
  render: (args) => {
    return <PhoneField {...args} sx={{ width: '250px', marginTop: '30px' }} />;
  }
};

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');

    return (
      <div>
        <div>
          <PhoneField
            {...args}
            sx={{ width: '250px', marginTop: '30px' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button onClick={() => setValue('+79999999999')}>Set example phone</button>
      </div>
    );
  }
};

export const DefaultCountry: Story = {
  render: (args) => {
    return <PhoneField {...args} defaultCountry="RU" sx={{ width: '250px', marginTop: '30px' }} />;
  }
};

export const AllCountries: Story = {
  render: (args) => {
    return <PhoneField {...args} countries={getCountries()} sx={{ width: '250px', marginTop: '30px' }} />;
  }
};

export const SingleCountry: Story = {
  render: (args) => {
    return <PhoneField {...args} countries={['RU']} />;
  }
};

export const WithoutButton: Story = {
  render: (args) => {
    return <PhoneField {...args} InputProps={{ startAdornment: null }} countries={['RU']} />;
  }
};
