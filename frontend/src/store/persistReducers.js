import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'donamaid',
      storage,
      whitelist: ['auth', 'client'],
    },
    reducers
  );

  return persistedReducer;
};
