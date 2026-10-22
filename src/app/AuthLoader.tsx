import { redirect } from 'react-router';

function AuthLoader() {
  const token = localStorage.getItem('chat-store');
  if (!token) {
    throw redirect('/login');
  }
  return null;
}

export default AuthLoader;
