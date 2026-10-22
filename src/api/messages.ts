import { ChannelData, MessageData } from '@/api/types';

export async function createMessage(
  body: MessageData['body'],
  channelId: ChannelData['id'],
  username: MessageData['username'],
  token: string
): Promise<MessageData> {
  const response = await fetch('/api/v1/messages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, channelId, username }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function fetchMessages(token: string): Promise<MessageData[]> {
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

export async function editMessage(
  messageId: MessageData['id'],
  body: MessageData['body'],
  token: string
): Promise<void> {
  const response = await fetch(`/api/v1/messages/${messageId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

export async function removeMessage(
  messageId: MessageData['id'],
  token: string
): Promise<MessageData> {
  const response = await fetch(`/api/v1/messages/${messageId}`, {
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
