import { Container } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import NavBar from '@/components/NavBar';
import { useIsAuth } from '@/hooks/useIsAuth';
import { useToken } from '@/hooks/useToken';

function AppLayout() {
  const isAuth = useIsAuth();
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [token]);

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
