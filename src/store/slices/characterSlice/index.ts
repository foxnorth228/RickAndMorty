import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import config from '@store/slices/characterSlice/config';

const characterSlice = createSlice({
  name: config.name,
  initialState: config.initialValue,
  reducers: {
    setCharacters: (state, action: PayloadAction<[ICharacterCommon[], number]>) => {
      action.payload[0] = action.payload[0].map((el) => ({ ...el, id: Number(el.id) }));
      if (action.payload[1] === 1) {
        return action.payload[0];
      } else {
        return [...state, ...action.payload[0]];
      }
    },
  },
});

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
