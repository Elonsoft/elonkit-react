import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {
  ErrorPage,
  ErrorPageActions,
  ErrorPageDescription,
  ErrorPageFooter,
  ErrorPageHeading,
  ErrorPageLogo,
  ErrorPageStatus,
  ErrorPageStatusIcon403
} from '.';

import { IconArrowLeftW500 } from '../../icons';

const meta: Meta<typeof ErrorPage> = {
  tags: ['autodocs'],
  component: ErrorPage,
  parameters: {
    references: ['ErrorPage']
  }
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Demo: Story = {
  render: (_args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Box margin="-1rem">
        <ErrorPage sx={{ backgroundImage: 'url(https://placehold.co/100x100)' }}>
          <ErrorPageLogo>LOGO</ErrorPageLogo>

          <ErrorPageStatus>
            <ErrorPageStatusIcon403 />
          </ErrorPageStatus>

          <ErrorPageHeading>{locale === 'ru' ? 'Доступ запрещён' : 'Forbidden'}</ErrorPageHeading>

          <ErrorPageDescription>
            {locale === 'ru'
              ? 'У вас нет разрешения на просмотр этой страницы или выполнение данной операции.'
              : 'You do not have permission to view this page or to perform this operation.'}
          </ErrorPageDescription>

          <ErrorPageActions>
            <Button color="tertiary" size="48" startIcon={<IconArrowLeftW500 />} variant="outlined">
              {locale === 'ru' ? 'Назад' : 'Back'}
            </Button>
            <Button size="48" variant="outlined">
              {locale === 'ru' ? 'На главную' : 'Go to home'}
            </Button>
          </ErrorPageActions>

          <ErrorPageFooter>{locale === 'ru' ? 'Код ошибки 403' : 'Error code 403'}</ErrorPageFooter>
        </ErrorPage>
      </Box>
    );
  }
};
