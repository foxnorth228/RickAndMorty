import { configureStore } from '@reduxjs/toolkit';
import characterSlice from '@store/slices/characterSlice';
import { characterName } from '@store/slices/characterSlice/config';
import filterSlice from '@store/slices/filterSlice';
import { filterSliceName } from '@store/slices/filterSlice/config';

export const store = configureStore({
  reducer: {
    [characterName]: characterSlice,
    [filterSliceName]: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
