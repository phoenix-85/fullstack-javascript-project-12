import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ChannelData } from '@/api/types';

import { ChatStore } from './types';

const initialState = {
  username: '',
  token: '',
  messages: [],
  activeChannelId: '1',
};

const persistOptions = { name: 'chat-store' };

const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      ...initialState,
      setActiveChannelId: (channelId) => set({ activeChannelId: channelId }),
      addMessage: (message) => set(({ messages }) => ({ messages: [...messages, message] })),
      removeMessages: (channelId: ChannelData['id']) =>
        set(({ messages }) => ({ messages: messages.filter((m) => m.channelId !== channelId) })),
    }),
    persistOptions
  )
);

export default useChatStore;
