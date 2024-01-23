import { configureStore } from '@reduxjs/toolkit';
import { characterName } from '@store/slices/characterSlice/config';
import characterSlice from '@store/slices/characterSlice';
import { filterSliceName } from '@store/slices/filterSlice/config';
import filterSlice from '@store/slices/filterSlice';

export const store = configureStore({
  reducer: {
    [characterName]: characterSlice,
    [filterSliceName]: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
