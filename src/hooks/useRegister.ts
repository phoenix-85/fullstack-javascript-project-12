import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { createUser } from '@/api/users';
import useChatStore from '@/store';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createUser,
    onSuccess: ({ token, username }) => {
      useChatStore.setState({ token, username });
      navigate('/', { replace: true });
    },
  });
};
