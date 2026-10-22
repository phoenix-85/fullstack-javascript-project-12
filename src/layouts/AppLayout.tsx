import { Container } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router';

import NavBar from '@/components/NavBar';

function AppLayout() {
  return (
    <>
      <header>
        <NavBar />
        <Notifications position="bottom-right" />
      </header>

      <main>
        <Container size="lg">
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default AppLayout;
