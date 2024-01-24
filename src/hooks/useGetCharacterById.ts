import { useApiGetCharacterById } from '@services/rickAndMorty/hooks';
import { useEffect, useState } from 'react';
import { ICharacterFull } from '@services/rickAndMorty/queries/characters/types';

const useGetCharacterById = (id: number) => {
  const [info, setInfo] = useState<ICharacterFull | null>(null);
  const [oldId, setOldId] = useState(id);
  const { loading, error, data } = useApiGetCharacterById({
    variables: { id },
    skip: oldId === id,
  });
  useEffect(() => {
    setOldId(id);
  }, [id]);
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
  return info;
};

export default useGetCharacterById;
