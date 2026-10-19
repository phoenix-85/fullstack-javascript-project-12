import useChatStore from '@/store';

export const useLogin = () => async (formData: { username: string; password: string }) => {
  const response = await fetch('/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { token } = await response.json();
  useChatStore.setState({ token });
};
