import debug from 'debug';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Socket } from 'socket.io-client';

import App from './app/App';
import resources from './locales';

const logSocket = debug('chat:socket');

const init = async (socket: Socket) => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
  });

  socket.on('newMessage', logSocket);

  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default init;
