import useChatStore from '@/store';
import { selectIsAuth } from '@/store/selectors';

export const useIsAuth = () => useChatStore(selectIsAuth);
