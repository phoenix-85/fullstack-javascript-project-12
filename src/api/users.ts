import { UserData } from './types';

export async function createUser(
  formData: UserData
): Promise<{ token: string; username: UserData['username'] }> {
  const response = await fetch('/api/v1/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    switch (response.status) {
      case 409:
        throw new Error('Такой пользователь уже существует');
      default:
        throw new Error(response.statusText);
    }
  }

  return response.json();
}

export async function loginUser(formData: UserData): Promise<{ token: string }> {
  const response = await fetch('/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error('Неправильное имя или пароль');
      default:
        throw new Error(response.statusText);
    }
  }

  return response.json();
}
