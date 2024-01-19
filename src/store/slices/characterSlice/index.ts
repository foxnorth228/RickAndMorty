import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterCommon } from '@services/rickAndMorty/types';
import config from '@store/slices/characterSlice/config';

const characterSlice = createSlice({
  name: config.name,
  initialState: config.initialValue,
  reducers: {
    setCharacters: (_, action: PayloadAction<CharacterCommon[]>) => {
      return action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
