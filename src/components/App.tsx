import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const App = () => (
  <MantineProvider>
    <Notifications position="bottom-right" />
    <h1>Hexlet Chat</h1>
  </MantineProvider>
);

export default App;
