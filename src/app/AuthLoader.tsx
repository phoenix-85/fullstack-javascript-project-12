import { redirect } from 'react-router';
import useChatStore from '@/store';

function AuthLoader() {
  const token = useChatStore.getState().token;
  if (!token) {
    throw redirect('/login');
  }
  return null;
}

export default AuthLoader;
