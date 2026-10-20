import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ChatStoreState } from './types';

const persistOptions = { name: 'chat-store' };

const useChatStore = create<ChatStoreState>()(
  persist(
    (set) => ({
      token: {},
      activeChannelId: null,
      setActiveChannelId: (channelId: number) => set({ activeChannelId: channelId }),
    }),
    persistOptions
  )
);

export default useChatStore;
