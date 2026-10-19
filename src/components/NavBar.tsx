import { Group } from '@mantine/core';
import { NavLink } from 'react-router';

function NavBar() {
  return (
    <Group justify="center" p="md">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="login">Войти</NavLink>
    </Group>
  );
}

export default NavBar;
