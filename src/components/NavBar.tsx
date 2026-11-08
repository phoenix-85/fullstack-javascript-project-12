import { Button, Group } from '@mantine/core';
import { NavLink } from 'react-router';
import { useLogout } from '@/hooks/useLogout';
import { useToken } from '@/hooks/useToken';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const token = useToken();
  const logout = useLogout();
  const { t } = useTranslation();

  if (token) {
    return (
      <Group justify="center" p="md">
        <NavLink to="/">Hexlet Chat</NavLink>
        <Button onClick={logout}>{t('user.actions.logout')}</Button>
      </Group>
    )
  }

  return (
    <Group justify="center" p="md">
      <NavLink to="/">Hexlet Chat</NavLink>
      <NavLink to="login">{t('user.actions.login')}</NavLink>
      <NavLink to="signup">{t('user.actions.signup')}</NavLink>
    </Group>
  );
}

export default NavBar;
