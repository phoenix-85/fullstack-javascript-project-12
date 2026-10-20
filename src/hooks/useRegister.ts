import { createUser } from '@/api/chat';
import useChatStore from '@/store';

export const useRegister = () => async (formData: { username: string; password: string }) => {
  const { token } = await createUser(formData);
  useChatStore.setState({ token });
};
