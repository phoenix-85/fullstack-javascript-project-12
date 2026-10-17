import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';

import init from './init';

const app = async () => {
  const rootElement = document.querySelector('#chat');

  if (!rootElement) {
    throw new Error('Root element #chat not found');
  }

  const root = ReactDOM.createRoot(rootElement);
  const socket = io();
  root.render(await init(socket));
};

app();
