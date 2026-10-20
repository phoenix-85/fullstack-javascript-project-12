import { Center } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useIsAuth } from '@/hooks/useIsAuth';
import { useToken } from '@/hooks/useToken';

function AuthLayout() {
  const isAuth = useIsAuth();
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [token]);

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
