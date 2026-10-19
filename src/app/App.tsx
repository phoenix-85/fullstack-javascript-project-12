import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { RouterProvider } from 'react-router';

import router from '@/app/router';

const App = () => (
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);

export default App;
