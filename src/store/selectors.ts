import { ChatStore } from './types';

const selectIsAuth = (state: ChatStore) => state.token.length > 0;
const selectToken = (state: ChatStore) => state.token;
const selectUsername = (state: ChatStore) => state.username;
const selectActiveChannelId = (state: ChatStore) => state.activeChannelId;
const selectActiveChannelMessages = (state: ChatStore) =>
  state.messages.filter((message) => message.channelId === state.activeChannelId);

export {
  selectIsAuth,
  selectToken,
  selectUsername,
  selectActiveChannelId,
  selectActiveChannelMessages,
};
