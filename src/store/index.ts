import { configureStore } from '@reduxjs/toolkit';
import { characterName } from '@store/slices/characterSlice/config';
import characterSlice from '@store/slices/characterSlice';

export const store = configureStore({
  reducer: {
    [characterName]: characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
