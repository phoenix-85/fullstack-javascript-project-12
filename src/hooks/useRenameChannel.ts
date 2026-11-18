import { useMutation, useQueryClient } from '@tanstack/react-query';

import { renameChannel } from '../api/channels';
import { useActiveChannel } from './useActiveChannel';
import { useToken } from './useToken';

export const useRenameChannel = () => {
  const token = useToken();
  const [channelId] = useActiveChannel();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => renameChannel(channelId, name, token),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['channels'] }),
  });
};
