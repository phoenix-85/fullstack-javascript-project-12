import { useEffect } from 'react';
import { io } from 'socket.io-client';

import useChatStore from '@/store';

export const useSubscribeMessages = () => {
  const socket = io();
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    }
  }, []);

  useEffect(() => {
    socket.on('newMessage', addMessage);

    return () => {
      socket.off('newMessage', addMessage);
    };
  }, []);
};
