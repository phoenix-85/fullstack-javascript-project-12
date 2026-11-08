import useChatStore from '@/store';
import { useNavigate } from 'react-router';

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    useChatStore.setState(useChatStore.getInitialState());

    navigate('/');
  };
}