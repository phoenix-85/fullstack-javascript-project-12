import { ChannelData, MessageData, UserData } from '@/api/types';

type ChatState = {
  messages: MessageData[];
  token: string;
  username: UserData['username'];
  activeChannelId: ChannelData['id'];
};

type ChatStoreActions = {
  setActiveChannelId: (channelId: ChannelData['id']) => void;
  addMessage: (messageData: MessageData) => void;
};

export type ChatStore = ChatState & ChatStoreActions;
