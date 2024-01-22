import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import { setCharacters } from '@store/slices/characterSlice/index';

export const useStoreGetCharacters = () => {
  return useSelector((root: RootState) => root.characters);
};

export const useStoreSetCharacters = () => {
  const dispatch = useDispatch();
  return (characters: ICharacterCommon[]) => dispatch(setCharacters(characters));
}