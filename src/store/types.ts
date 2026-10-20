export type ChatStoreState = {
  token: object;
  activeChannelId?: number | null;
  setActiveChannelId: (channelId: number) => void;
};
