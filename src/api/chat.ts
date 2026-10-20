interface UserData {
  username: string;
  password: string;
}

interface ChannelData {
  id: number;
  name: string;
  removable: boolean;
}

interface MessageData {
  id?: number;
  body: string;
  username: string;
  removable: boolean;
}

export async function createUser(
  formData: UserData
): Promise<{ token: object; username: UserData['username'] }> {
  const response = await fetch('/api/v1/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { token } = await response.json();
  const { username } = formData;
  return { token, username };
}

export async function loginUser(formData: UserData): Promise<{ token: object }> {
  const response = await fetch('/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function fetchChannels(token: object): Promise<ChannelData[]> {
  const response = await fetch('/api/v1/channels', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function createChannel(name: ChannelData['name'], token: object): Promise<ChannelData> {
  const response = await fetch('/api/v1/channels', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function renameChannel(
  channel: ChannelData,
  name: ChannelData['name'],
  token: object
): Promise<void> {
  const response = await fetch(`/api/v1/channels/${channel.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

export async function removeChannel(channel: ChannelData, token: object): Promise<ChannelData> {
  const response = await fetch(`/api/v1/channels/${channel.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function fetchMessages(token: object): Promise<MessageData[]> {
  const response = await fetch('/api/v1/messages', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function createMessage(
  channel: ChannelData,
  body: MessageData['body'],
  username: MessageData['username'],
  token: object,
): Promise<MessageData> {
  const response = await fetch('/api/v1/messages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, channelId: channel.id, username, removable: true }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { message } = await response.json();
  return message;
}

export async function editMessage(message: MessageData, token: object): Promise<void> {
  const response = await fetch(`/api/v1/messages/${message.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body: message.body }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

export async function removeMessage(message: MessageData, token: object): Promise<MessageData> {
  const response = await fetch(`/api/v1/messages/${message.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
