import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const App = () => (
  <BrowserRouter>
    <MantineProvider>
      <Notifications position="bottom-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MantineProvider>
  </BrowserRouter>
);

export default App;
