import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ChatStoreState = {
  token: object;
};

const persistOptions = { name: 'chat-store' };

const useChatStore = create<ChatStoreState>()(
  persist(
    (set) => ({
      token: {},
    }),
    persistOptions
  )
);

export default useChatStore;
