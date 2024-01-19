import { CharacterCommon } from '@services/rickAndMorty/types';

export const characterName = 'characters';

const config = {
  name: characterName,
  initialValue: [] as CharacterCommon[],
};

export default config;
