import useChatStore from '@/store';
import { useNavigate } from 'react-router';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    useChatStore.setState(useChatStore.getInitialState());

    navigate('/');
  }
  return logout;
}