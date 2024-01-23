import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import config from './config';
import { IFilterChangePayload } from './types';

const filterSlice = createSlice({
  name: config.name,
  initialState: config.initialState,
  reducers: {
    changeFilter: (state, { payload: { key, value } }: PayloadAction<IFilterChangePayload>) => {
      return { ...state, [key]: value };
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
