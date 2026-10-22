import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { loginUser } from '@/api/users';
import useChatStore from '@/store';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ token }, { username }) => {
      useChatStore.setState({ token, username });
      navigate('/', { replace: true });
    },
  });
};
