import { useEffect } from 'react';

import { fetchMessages } from '@/api/messages';
import { useToken } from '@/hooks/useToken';
import useChatStore from '@/store';

export const useFetchMessages = () => {
  const token = useToken();

  useEffect(() => {
    fetchMessages(token).then((messages) => useChatStore.setState({ messages }));
  }, [token]);
};
