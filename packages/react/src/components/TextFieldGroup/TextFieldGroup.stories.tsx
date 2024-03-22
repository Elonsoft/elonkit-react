import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { TextFieldGroup } from './TextFieldGroup';

const meta: Meta<typeof TextFieldGroup> = {
  tags: ['autodocs'],
  component: TextFieldGroup,
  parameters: {
    references: ['TextFieldGroup']
  },
  argTypes: {
    breakpoint: {
      control: {
        type: 'number'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextFieldGroup>;

export const Demo: Story = {
  render: ({ breakpoint }, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <TextFieldGroup breakpoint={breakpoint}>
        <TextField required label={locale === 'en' ? 'First name' : 'Имя'} />
        <TextField required label={locale === 'en' ? 'Second name' : 'Фамилия'} />
        <TextField error required label={locale === 'en' ? 'Patronymic' : 'Отчество'} />
      </TextFieldGroup>
    );
  }
};
