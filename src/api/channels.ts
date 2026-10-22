import { ChannelData } from '@/api/types';

export async function fetchChannels(token: string): Promise<ChannelData[]> {
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

export async function createChannel(
  name: ChannelData['name'],
  token: string
): Promise<ChannelData> {
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
  channelId: ChannelData['id'],
  name: ChannelData['name'],
  token: string
): Promise<void> {
  const response = await fetch(`/api/v1/channels/${channelId}`, {
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

export async function removeChannel(
  channelId: ChannelData['id'],
  token: string
): Promise<ChannelData> {
  const response = await fetch(`/api/v1/channels/${channelId}`, {
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
