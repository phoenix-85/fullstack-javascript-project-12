import { createBrowserRouter } from 'react-router';

import AuthLoader from '@/app/AuthLoader';
import GuestLoader from '@/app/GuestLoader';
import AppLayout from '@/layouts/AppLayout';
import AuthLayout from '@/layouts/AuthLayout';
import Chat from '@/pages/Chat';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    loader: AuthLoader,
    children: [
      { index: true, Component: Chat },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: 'login',
    Component: AuthLayout,
    loader: GuestLoader,
    children: [{ index: true, Component: Login }],
  },
]);

export default router;
