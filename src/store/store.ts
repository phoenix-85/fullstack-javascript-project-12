import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ChatStore } from './types';

const initialState = {
  username: '',
  token: '',
  messages: [],
  activeChannelId: "1",
};

const persistOptions = { name: 'chat-store' };

const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      ...initialState,
      setActiveChannelId: (channelId) => set({ activeChannelId: channelId }),
      addMessage: (message) => set(({ messages }) => ({ messages: [...messages, message] })),
    }),
    persistOptions
  )
);

export default useChatStore;
