import { loginUser } from '@/api/chat';
import useChatStore from '@/store';

export const useLogin = () => async (formData: { username: string; password: string }) => {
  const { token } = await loginUser(formData);
  useChatStore.setState({ token });
};
