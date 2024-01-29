import ContextSelectedCharacter from '@src/contexts/ContextSelectedCharacter';
import { IContextSelectedCharacter } from '@src/contexts/ContextSelectedCharacter/types';
import { useContext } from 'react';

const useContextSelectedCharacter = (): IContextSelectedCharacter => {
  return useContext(ContextSelectedCharacter);
};

export default useContextSelectedCharacter;
