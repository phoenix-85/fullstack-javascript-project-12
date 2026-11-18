import { useNavigate } from 'react-router';

import useChatStore from '../store';

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    useChatStore.setState(useChatStore.getInitialState());

    navigate('/');
  };
};
