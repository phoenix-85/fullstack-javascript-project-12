import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeChannel } from '@/api/channels';
import { ChannelData } from '@/api/types';
import { useToken } from '@/hooks/useToken';
import useChatStore from '@/store';

export const useDeleteChannel = () => {
  const token = useToken();
  const queryClient = useQueryClient();
  const removeMessages = useChatStore((state) => state.removeMessages);

  return useMutation({
    mutationFn: (channelId: ChannelData['id']) => removeChannel(channelId, token),
    onSuccess: (channelId: ChannelData['id']) => {
      queryClient.invalidateQueries({ queryKey: ['channels'] });
      removeMessages(channelId);
    },
  });
};
