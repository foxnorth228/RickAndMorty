import { useApiGetCharacterById } from '@services/rickAndMorty/hooks';
import { IResponseCharacterId } from '@services/rickAndMorty/queries/characters/types';
import { useEffect, useState } from 'react';

const useGetCharacterById = (id: number) => {
  const [info, setInfo] = useState<IResponseCharacterId | { character: null } | null>(null);
  const { error, data } = useApiGetCharacterById({
    variables: { id },
  });
  useEffect(() => {
    if (data) {
      setInfo(data);
    }
    if (error) {
      console.error(error);
    }
  }, [data, error]);
  return info && info.character;
};

export default useGetCharacterById;
