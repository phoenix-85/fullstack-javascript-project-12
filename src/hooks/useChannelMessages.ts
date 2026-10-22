import { useShallow } from 'zustand/react/shallow';

import useChatStore from '@/store';
import { selectActiveChannelMessages } from '@/store/selectors';

export const useChannelMessages = () => useChatStore(useShallow(selectActiveChannelMessages));
