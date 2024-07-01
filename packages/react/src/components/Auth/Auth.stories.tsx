import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
  Auth,
  AuthCard,
  AuthCardActions,
  AuthCardContent,
  AuthCardHeading,
  AuthFooter,
  AuthLink,
  AuthLogo,
  AuthMain,
} from '.';

import { Alert } from '../Alert';
import { Button } from '../Button';
import { Link } from '../Link';
import { MadeBy } from '../MadeBy';
import { PasswordField } from '../PasswordField';

const meta: Meta<typeof Auth> = {
  tags: ['autodocs'],
  title: 'Auth',
  parameters: {
    references: [
      'Auth',
      'AuthCard',
      'AuthCardActions',
      'AuthCardContent',
      'AuthCardHeading',
      'AuthFooter',
      'AuthLink',
      'AuthLogo',
      'AuthMain',
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Auth>;

export const Demo: Story = {
  render: function Render(_args, context) {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
    };

    return (
      <Box sx={{ margin: '-1rem' }}>
        <Auth>
          <AuthMain>
            <AuthLogo>
              <Box sx={{ width: '150px', height: '44px', backgroundColor: '#000' }} />
            </AuthLogo>
            <AuthCard>
              <form onSubmit={onSubmit}>
                <AuthCardContent>
                  <AuthCardHeading>{locale === 'en' ? 'Sign in' : 'Вход'}</AuthCardHeading>
                  <Alert severity="error">
                    {locale === 'en' ? 'Incorrect username or password' : 'Неправильный логин или пароль'}
                  </Alert>
                  <TextField fullWidth label="Телефон" />
                  <PasswordField fullWidth label="Пароль" />
                  <Link component="a" href="#" sx={{ alignSelf: 'flex-start' }} underline="hover" variant="subtitle1">
                    {locale === 'en' ? 'Forgot your password?' : 'Забыли пароль?'}
                  </Link>
                </AuthCardContent>
                <AuthCardActions>
                  <Button fullWidth color="primary" size="56" variant="contained">
                    {locale === 'en' ? 'Sign in' : 'Войти'}
                  </Button>
                </AuthCardActions>
              </form>
            </AuthCard>
            <AuthLink component="a" href="#" underline="hover">
              {locale === 'en' ? 'Forgot your password?' : 'Забыли пароль?'}
            </AuthLink>
          </AuthMain>
          <AuthFooter>
            <MadeBy clickable />
          </AuthFooter>
        </Auth>
      </Box>
    );
  },
};
