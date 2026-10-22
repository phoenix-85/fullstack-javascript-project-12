import useChatStore from '@/store';
import { selectUsername } from '@/store/selectors';

export const useUsername = () => useChatStore(selectUsername);
