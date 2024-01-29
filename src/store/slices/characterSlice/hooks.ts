import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import { RootState } from '@src/store';
import { setCharacters } from '@store/slices/characterSlice/index';
import { useDispatch, useSelector } from 'react-redux';

export const useStoreGetCharacters = () => {
  return useSelector((root: RootState) => root.characters);
};

export const useStoreSetCharacters = () => {
  const dispatch = useDispatch();
  return (characters: ICharacterCommon[]) => dispatch(setCharacters(characters));
};
