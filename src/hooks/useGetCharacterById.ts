import { useApiGetCharacterById } from '@services/rickAndMorty/hooks';
import { IResponseCharacterId } from '@services/rickAndMorty/queries/characters/types';
import { useEffect, useState } from 'react';

const useGetCharacterById = (id: number) => {
  const [info, setInfo] = useState<IResponseCharacterId | { character: null } | null>(null);
  const { loading, error, data } = useApiGetCharacterById({
    variables: { id },
  });
  console.log('call', info, data);
  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (data) {
      setInfo(data);
    }
    if (error) {
      console.error(error);
    }
  }, [data, error, loading]);
  return info && info.character;
};

export default useGetCharacterById;
