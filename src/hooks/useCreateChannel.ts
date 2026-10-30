import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createChannel } from '@/api/channels';
import { useToken } from '@/hooks/useToken';

export const useCreateChannel = () => {
  const token = useToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => createChannel(name, token),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['channels'] }),
  });
};
