import { QueryHookOptions, QueryResult, useQuery } from '@apollo/client';
import { IResponseCharacter } from '@services/rickAndMorty/queries/characters/types';

import getAllCharacters from './queries/characters/characters.graphql';

export const useApiGetAllCharacters = (
  options: QueryHookOptions | undefined
): QueryResult<IResponseCharacter> => useQuery(getAllCharacters, options);
