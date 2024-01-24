import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import config from '@store/slices/characterSlice/config';

const characterSlice = createSlice({
  name: config.name,
  initialState: config.initialValue,
  reducers: {
    setCharacters: (_, action: PayloadAction<ICharacterCommon[]>) => {
      action.payload = action.payload.map((el) => ({ ...el, id: Number(el.id) }));
      return action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
