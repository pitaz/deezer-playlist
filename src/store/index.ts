// store.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import artistsReducer from './slices/artistsSlice';
import artistDetailsReducer from './slices/artistDetailsSlice';

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    artistDetails: artistDetailsReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

