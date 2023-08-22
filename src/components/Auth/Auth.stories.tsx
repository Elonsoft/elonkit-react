import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
  AuthMain
} from '.';

import { Alert } from '../Alert';
import { Link } from '../Link';
import { PasswordField } from '../PasswordField';

export const Demo: Story = (args, context) => {
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
                <AuthCardHeading>Вход</AuthCardHeading>
                <Alert severity="error">Неправильный логин или пароль</Alert>
                <TextField fullWidth label="Телефон" />
                <PasswordField fullWidth label="Пароль" />
                <Link component="a" href="#" underline="hover" variant="subtitle1">
                  Забыли пароль?
                </Link>
              </AuthCardContent>
              <AuthCardActions>
                <Button fullWidth size="56" variant="contained">
                  Войти
                </Button>
              </AuthCardActions>
            </form>
          </AuthCard>
          <AuthLink component="a" href="#">
            Забыли пароль?
          </AuthLink>
        </AuthMain>
        <AuthFooter>
          <span>Сделано в</span>
          <Box sx={{ marginTop: '1px', width: '90px', height: '18px', backgroundColor: '#000' }} />
        </AuthFooter>
      </Auth>
    </Box>
  );
};
