import { QueryHookOptions, QueryResult, useQuery } from '@apollo/client';
import { IResponseCharacter } from '@services/rickAndMorty/queries/characters/types';

import getCharacterByid from './queries/characters/characterById.graphql';
import getAllCharacters from './queries/characters/characters.graphql';

export const useApiGetAllCharacters = (
  options: QueryHookOptions | undefined
): QueryResult<IResponseCharacter> => useQuery(getAllCharacters, options);

export const useApiGetCharacterById = (options: QueryHookOptions) =>
  useQuery(getCharacterByid, options);
