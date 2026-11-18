import { useMutation } from '@tanstack/react-query';

import { createMessage } from '../api/messages';
import { useActiveChannel } from './useActiveChannel';
import { useToken } from './useToken';
import { useUsername } from './useUsername';

export const useCreateMessage = () => {
  const token = useToken();
  const username = useUsername();
  const [channelId] = useActiveChannel();

  return useMutation({
    mutationFn: (body: string) => createMessage(body, channelId, username, token),
  });
};
