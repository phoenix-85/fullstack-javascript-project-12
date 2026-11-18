import { useEffect } from 'react';

import { fetchMessages } from '../api/messages';
import { useToken } from './useToken';
import useChatStore from '../store';

export const useFetchMessages = () => {
  const token = useToken();

  useEffect(() => {
    if (token) {
      fetchMessages(token).then((messages) => useChatStore.setState({ messages }));
    }
  }, [token]);
};
