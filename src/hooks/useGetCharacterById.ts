import { useApiGetCharacterById } from '@services/rickAndMorty/hooks';
import { useEffect, useState } from 'react';

const useGetCharacterById = (id: number) => {
  const [info, setInfo] = useState(null);
  const { loading, error, data } = useApiGetCharacterById({ variables: { id } });
  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (data) {
      console.log(data);
      setInfo(data);
    }
    if (error) {
      console.error(error);
    }
  }, [data, error, loading]);
  return info;
};

export default useGetCharacterById;
