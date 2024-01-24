import { useContext } from 'react';
import ContextSelectedCharacter from '@src/contexts/ContextSelectedCharacter';
import { IContextSelectedCharacter } from '@src/contexts/ContextSelectedCharacter/types';

const useContextSelectedCharacter = (): IContextSelectedCharacter => {
  return useContext(ContextSelectedCharacter);
};

export default useContextSelectedCharacter;
