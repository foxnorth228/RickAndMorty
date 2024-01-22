import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';

export const characterName = 'characters';

const config = {
  name: characterName,
  initialValue: [] as ICharacterCommon[],
};

export default config;
