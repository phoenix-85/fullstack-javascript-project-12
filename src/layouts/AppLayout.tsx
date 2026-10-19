import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import NavBar from '@/components/NavBar';
import useChatStore from '@/store';

function AppLayout() {
  const token = useChatStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(token).length === 0) {
      navigate('/login');
    } else {
      navigate('/', { replace: true });
    }
  }, [token]);

  return (
    <>
      <header>
        <NavBar />
        <Notifications position="bottom-right" />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
