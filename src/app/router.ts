import { createBrowserRouter } from 'react-router';

import AppLayout from '@/layouts/AppLayout';
import AuthLayout from '@/layouts/AuthLayout';
import Chat from '@/pages/Chat';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Chat,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
  {
    path: 'login',
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
    ],
  },
]);

export default router;
