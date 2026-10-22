import { Center } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router';

function AuthLayout() {
  return (
    <>
      <header>
        <Notifications position="bottom-right" />
      </header>

      <main>
        <Center h="100vh">
          <Outlet />
        </Center>
      </main>
    </>
  );
}

export default AuthLayout;
