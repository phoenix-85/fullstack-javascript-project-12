import { useQuery } from '@tanstack/react-query';

import { fetchChannels } from '@/api/channels';
import { useToken } from '@/hooks/useToken';

export const useFetchChannels = () => {
  const token = useToken();

  return useQuery({
    queryKey: ['channels', token],
    queryFn: () => fetchChannels(token),
    staleTime: 1000 * 60 * 0.5,
  });
};
