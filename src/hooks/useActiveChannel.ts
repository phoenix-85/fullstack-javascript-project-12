import { ChannelData } from '@/api/types';
import useChatStore from '@/store';
import { selectActiveChannelId } from '@/store/selectors';

export const useActiveChannel = (): [ChannelData['id'], (channelId: ChannelData['id']) => void] => {
  const activeChannelId = useChatStore(selectActiveChannelId);
  const setActiveChannelId = useChatStore((state) => state.setActiveChannelId);

  return [activeChannelId, setActiveChannelId];
};
