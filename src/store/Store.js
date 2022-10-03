import  {configureStore} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import DataFilter from '../Reducer/Reducer';

const persistConfig = {
    key: 'root',
    storage:storage,
    whitelist: ['userName']
  }
  const persistedReducer = persistReducer(persistConfig, DataFilter)
 
   const store = configureStore( {reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
});

export default store;
  
