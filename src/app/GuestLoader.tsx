import { redirect } from 'react-router';
import useChatStore from '@/store';

function GuestLoader() {
  const token = useChatStore.getState().token;
  if (token) {
    throw redirect('/');
  }
  return null;
}

export default GuestLoader;
