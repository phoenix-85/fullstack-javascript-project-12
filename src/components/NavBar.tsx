import { Button, Group } from '@mantine/core';
import { NavLink } from 'react-router';
import { useLogout } from '@/hooks/useLogout';
import { useToken } from '@/hooks/useToken';

function NavBar() {
  const token = useToken();
  const logout = useLogout();

  if (token !== '') {
    return (
      <Group justify="center" p="md">
        <NavLink to="/">Hexlet Chat</NavLink>
        <Button onClick={logout}>Выйти</Button>
      </Group>
    )
  }

  return (
    <Group justify="center" p="md">
      <NavLink to="/">Hexlet Chat</NavLink>
      <NavLink to="login">Войти</NavLink>
      <NavLink to="signup">Регистрация</NavLink>
    </Group>
  );
}

export default NavBar;
