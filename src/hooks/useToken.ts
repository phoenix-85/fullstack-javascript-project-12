import useChatStore from '@/store';
import { selectToken } from '@/store/selectors';

export const useToken = () => useChatStore(selectToken);
