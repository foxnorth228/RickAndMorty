import { QueryResult, useQuery } from '@apollo/client';
import { IResponseCharacter } from '@services/rickAndMorty/queries/characters/types';

import getAllCharacters from './queries/characters/characters.graphql';

export const useApiGetAllCharacters = (): QueryResult<IResponseCharacter> =>
  useQuery(getAllCharacters);
