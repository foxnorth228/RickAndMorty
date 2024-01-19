import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { CharacterCommon } from '@services/rickAndMorty/types';
import { setCharacters } from '@store/slices/characterSlice/index';

export const useCharacters = () => {
  return useSelector((root: RootState) => root.characters);
};

export const useSetCharacters = () => {
  const dispatch = useDispatch();
  return (characters: CharacterCommon[]) => dispatch(setCharacters(characters));
}