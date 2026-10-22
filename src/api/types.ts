export interface UserData {
  username: string;
  password: string;
}

export interface ChannelData {
  id: string;
  name: string;
  removable: boolean;
}

export interface MessageData {
  id: number;
  body: string;
  channelId: ChannelData['id'];
  username: UserData['username'];
  removable: boolean;
}
