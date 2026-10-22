import { redirect } from 'react-router';

function GuestLoader() {
  const token = localStorage.getItem('chat-store');
  if (token) {
    throw redirect('/');
  }
  return null;
}

export default GuestLoader;
