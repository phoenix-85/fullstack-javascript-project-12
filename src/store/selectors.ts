import { ChatStoreState } from './types';

const selectIsAuth = (state: ChatStoreState) => Object.keys(state.token).length > 0;
const selectToken = (state: ChatStoreState) => state.token;

export { selectIsAuth, selectToken };
